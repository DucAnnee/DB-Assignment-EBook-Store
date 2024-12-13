CREATE SEQUENCE SEQ_PUBLISHER_ID START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE SEQ_AUTHOR_ID START WITH 1 INCREMENT BY 1;
CREATE OR REPLACE PROCEDURE insert_item_and_subclass (
    p_name VARCHAR2,
    p_price NUMBER,
    p_stock NUMBER,
    p_description VARCHAR2,
    p_type VARCHAR2,
    p_isbn VARCHAR2 DEFAULT NULL,
    p_production_date DATE DEFAULT NULL,
    p_manufacturer VARCHAR2 DEFAULT NULL,
    p_publisher_name VARCHAR2 DEFAULT NULL,
    p_puplisher_address VARCHAR2 DEFAULT NULL,
    p_puplisher_contact VARCHAR2 DEFAULT NULL,
    p_authorID NUMBER DEFAULT NULL, 
    p_author_Name VARCHAR2 DEFAULT NULL, 
    p_author_Bio VARCHAR2 DEFAULT NULL
) AS
    v_item_id NUMBER;
    v_publisher_id NUMBER;
    v_author_id NUMBER;
BEGIN
    -- Step 1: Insert into Item table
    INSERT INTO Item (Name, Price, Stock, Description)
    VALUES (p_name, p_price, p_stock, p_description)
    RETURNING ItemID INTO v_item_id;

    -- Step 2: Handle subclass insertion (Book or Toys)
    IF p_type = 'Book' THEN
        INSERT INTO Book (ItemID, ISBN, PublicationDate)
        VALUES (v_item_id, p_isbn, SYSDATE);

        -- Step 3: Handle Publisher (Reuse ID if exists)
        IF p_publisher_name IS NOT NULL THEN
            BEGIN
                -- Check if publisher exists
                SELECT PublisherID INTO v_publisher_id
                FROM Publisher
                WHERE Name = p_publisher_name
                FETCH FIRST 1 ROW ONLY;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN
                    -- Insert new Publisher if not exists
                    INSERT INTO Publisher (PublisherID, Name, Address, ContactINFO)
                    VALUES (SEQ_PUBLISHER_ID.NEXTVAL, p_publisher_name, p_puplisher_address, p_puplisher_contact)
                    RETURNING PublisherID INTO v_publisher_id;
            END;
        END IF;

        -- Step 4: Insert into PUBLISHES table
        INSERT INTO PUBLISHES (PublisherID, ItemID)
        VALUES (v_publisher_id, v_item_id);

        -- Step 5: Handle Author (Reuse ID if exists)
        IF p_author_Name IS NOT NULL THEN
            BEGIN
                -- Check if author exists
                SELECT AuthorID INTO v_author_id
                FROM Author
                WHERE FULLName = p_author_Name
                FETCH FIRST 1 ROW ONLY;
            EXCEPTION
                WHEN NO_DATA_FOUND THEN
                    -- Insert new Author if not exists
                    INSERT INTO Author (AuthorID, FullName, Bio)
                    VALUES (SEQ_AUTHOR_ID.NEXTVAL, p_author_Name, p_author_Bio)
                    RETURNING AuthorID INTO v_author_id;
            END;
        END IF;

        -- Step 6: Insert into WRITES table
        INSERT INTO WRITES (AuthorID, ItemID)
        VALUES (v_author_id, v_item_id);

    ELSIF p_type = 'Toys' THEN
        -- Insert into Toys table
        INSERT INTO Toys (ItemID, ProductionDate, Manufacturer)
        VALUES (v_item_id, p_production_date, p_manufacturer);
    END IF;

    COMMIT;

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        RAISE_APPLICATION_ERROR(-20001, 'Error occurred: ' || SQLERRM);
END insert_item_and_subclass;
/


CREATE OR REPLACE PROCEDURE delete_item_and_subclass (
    p_item_id NUMBER
) AS
BEGIN
    -- Delete from Book
    DELETE FROM Book WHERE ItemID = p_item_id;

    -- Delete from Toys
    DELETE FROM Toys WHERE ItemID = p_item_id;

    -- Delete from Item
    DELETE FROM Item WHERE ItemID = p_item_id;
END;
/
-- Procedure to Update Item Stock after an Order

CREATE OR REPLACE PROCEDURE Update_Item_Stock(p_OrderID IN NUMBER) IS
    v_Stock NUMBER;  -- Variable to store current stock
BEGIN
    FOR rec IN (
        SELECT OI.ItemID, OI.Quantity
        FROM OrderItem OI
        WHERE OI.OrderID = p_OrderID
    ) LOOP
        SELECT Stock
        INTO v_Stock
        FROM Item
        WHERE ItemID = rec.ItemID;

        IF v_Stock - rec.Quantity < 0 THEN
            RAISE_APPLICATION_ERROR(-20001, 
                'Insufficient stock for ItemID: ' || rec.ItemID);
        END IF;

        UPDATE Item
        SET Stock = Stock - rec.Quantity
        WHERE ItemID = rec.ItemID;
    END LOOP;

    COMMIT;
END Update_Item_Stock;
/


