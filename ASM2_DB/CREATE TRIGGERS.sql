--  Automatically Assign ItemID
CREATE SEQUENCE seq_item_id
START WITH 100000
INCREMENT BY 1
NOCYCLE
NOCACHE;


CREATE OR REPLACE TRIGGER trg_assign_item_id
BEFORE INSERT ON Item
FOR EACH ROW
BEGIN
    :NEW.ItemID := seq_item_id.NEXTVAL;
END;
/

-- Prevent Negative Stock in Item Table
CREATE OR REPLACE TRIGGER trg_validate_stock_update
BEFORE UPDATE OF Stock ON Item
FOR EACH ROW
BEGIN
    IF :NEW.Stock < 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Stock cannot be negative.');
    END IF;
END;
/

-- Enforce BookGenre Consistency
CREATE OR REPLACE TRIGGER trg_validate_unique_genre
BEFORE INSERT ON BookGenre
FOR EACH ROW
DECLARE
    v_exists NUMBER;
BEGIN
    SELECT COUNT(*)
    INTO v_exists
    FROM BookGenre
    WHERE BookID = :NEW.BookID AND Genre = :NEW.Genre;

    IF v_exists > 0 THEN
        RAISE_APPLICATION_ERROR(-20002, 'Duplicate genre for the same book is not allowed.');
    END IF;
END;
/

-- Automatically Set Order Date
CREATE OR REPLACE TRIGGER trg_set_order_date
BEFORE INSERT ON Orders
FOR EACH ROW
BEGIN
    :NEW.OrderDate := SYSDATE;
END;
/

-- Enforce Valid Price for Items
CREATE OR REPLACE TRIGGER trg_set_valid_item_price
BEFORE INSERT OR UPDATE OF Price ON Item
FOR EACH ROW
BEGIN
    IF :NEW.Price <= 0 THEN
        RAISE_APPLICATION_ERROR(-20003, 'Price must be greater than zero');
    END IF;
END;
/

-- Enforce Email Uniqueness
CREATE OR REPLACE TRIGGER trg_validate_unique_email
BEFORE INSERT OR UPDATE OF Email ON USERGROUP
FOR EACH ROW
DECLARE
    v_exists NUMBER;
BEGIN
    SELECT COUNT(*)
    INTO v_exists
    FROM USERGROUP
    WHERE EMAIL = :NEW.EMAIL AND USERID != :NEW.USERID;

    IF v_exists > 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Email has been used before!');
    END IF;
END;
/    

-- Automatically Set Default Role
CREATE OR REPLACE TRIGGER trg_set_default_role
BEFORE INSERT ON USERGROUP
FOR EACH ROW
BEGIN
    IF :NEW.IsManager IS NULL THEN
        :NEW.IsManager := 'N';
    END IF;
END;
/

-- Cascade Delete Delivery Addresses
CREATE OR REPLACE TRIGGER trg_cascade_delete_addresses
AFTER DELETE ON UserGroup
FOR EACH ROW
BEGIN
    DELETE FROM DeliveryAddress
    WHERE AddressID IN (
        SELECT AddressID FROM DELIVERYADDRESS WHERE UserID = :OLD.UserID
    );

    DELETE FROM DELIVERYADDRESS
    WHERE UserID = :OLD.UserID;
END;
/

-- Auto-Update Order Total After Inserting OrderItem
CREATE OR REPLACE TRIGGER Update_Order_TotalPrice
FOR INSERT OR UPDATE OR DELETE ON OrderItem
COMPOUND TRIGGER

    -- Collection to store affected OrderIDs
    TYPE t_order_ids IS TABLE OF NUMBER INDEX BY PLS_INTEGER;
    v_order_ids t_order_ids;

    -- BEFORE STATEMENT: Initialize the collection
    BEFORE STATEMENT IS
    BEGIN
        v_order_ids.DELETE;
    END BEFORE STATEMENT;

    -- BEFORE EACH ROW: Collect affected OrderIDs
    BEFORE EACH ROW IS
    BEGIN
        IF INSERTING OR UPDATING THEN
            v_order_ids(:NEW.OrderID) := 1;
        ELSIF DELETING THEN
            v_order_ids(:OLD.OrderID) := 1;
        END IF;
    END BEFORE EACH ROW;

    -- AFTER STATEMENT: Recalculate TotalPrice for affected orders
    AFTER STATEMENT IS
    BEGIN
        FOR i IN v_order_ids.FIRST .. v_order_ids.LAST LOOP
            UPDATE Orders o
            SET TotalPrice = (
                SELECT NVL(SUM(i.Price * oi.Quantity), 0)
                FROM OrderItem oi
                JOIN Item i ON oi.ItemID = i.ItemID
                WHERE oi.OrderID = o.OrderID
            )
            WHERE o.OrderID = i;
        END LOOP;
    END AFTER STATEMENT;

END;
/

