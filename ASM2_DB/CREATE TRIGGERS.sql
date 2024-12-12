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

-- Ensure TotalPrice Calculation for Orders
CREATE OR REPLACE TRIGGER trg_calculate_total_price
AFTER INSERT OR UPDATE OR DELETE ON OrderItem
FOR EACH ROW
BEGIN
    UPDATE Orders
    SET TotalPrice = (
        SELECT SUM(I.Price * OI.Quantity)
        FROM OrderItem OI
        JOIN Item I ON OI.ItemID = I.ItemID
        WHERE OI.OrderID = :OLD.OrderID
    )
    WHERE OrderID = :OLD.OrderID;
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
