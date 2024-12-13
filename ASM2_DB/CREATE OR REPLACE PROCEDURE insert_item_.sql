CREATE OR REPLACE PROCEDURE insert_item_and_subclass (
    p_name VARCHAR2,
    p_price NUMBER,
    p_stock NUMBER,
    p_description VARCHAR2,
    p_type VARCHAR2,
    p_isbn VARCHAR2 DEFAULT NULL,
    p_production_date DATE DEFAULT NULL,
    p_manufacturer VARCHAR2 DEFAULT NULL
) AS
    v_item_id NUMBER;
BEGIN
    -- Insert into Item
    INSERT INTO Item (Name, Price, Stock, Description)
    VALUES (p_name, p_price, p_stock, p_description)
    RETURNING ItemID INTO v_item_id;

    -- Insert into Book or Toys based on p_type
    IF p_type = 'Book' THEN
        INSERT INTO Book (ItemID, ISBN, PublicationDate)
        VALUES (v_item_id, p_isbn, SYSDATE);
    ELSIF p_type = 'Toys' THEN
        INSERT INTO Toys (ItemID, ProductionDate, Manufacturer)
        VALUES (v_item_id, p_production_date, p_manufacturer);
    END IF;
END;
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