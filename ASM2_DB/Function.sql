-- Function to Calculate Total Order Price

CREATE OR REPLACE FUNCTION Calculate_Total_Order_Price(p_OrderID IN NUMBER)
RETURN NUMBER IS
    v_TotalPrice NUMBER := 0;
BEGIN
    SELECT SUM(I.Price * OI.Quantity)
    INTO v_TotalPrice
    FROM OrderItem OI
    JOIN Item I ON OI.ItemID = I.ItemID
    WHERE OI.OrderID = p_OrderID;

    RETURN NVL(v_TotalPrice, 0);
END Calculate_Total_Order_Price;
/

-- Function to Get Available Stock for an Item
CREATE OR REPLACE FUNCTION Get_Item_Stock(p_ItemID IN NUMBER)
RETURN NUMBER IS
    v_Stock NUMBER := 0;
BEGIN
    SELECT NVL(Stock, 0)
    INTO v_Stock
    FROM Item
    WHERE ItemID = p_ItemID;

    RETURN v_Stock;
END Get_Item_Stock;
/
