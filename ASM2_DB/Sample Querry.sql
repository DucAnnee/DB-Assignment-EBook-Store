SELECT 
    B.ItemID,
    I.Name AS BookName,
    A.FullName AS AuthorName,
    P.Name AS PublisherName,
    B.ISBN,
    B.PublicationDate
FROM 
    Book B
JOIN Item I ON B.ItemID = I.ItemID
LEFT JOIN Writes W ON B.ItemID = W.ItemID
LEFT JOIN Author A ON W.AuthorID = A.AuthorID
LEFT JOIN Publishes Pub ON B.ItemID = Pub.ItemID
LEFT JOIN Publisher P ON Pub.PublisherID = P.PublisherID;

SELECT 
    O.OrderID,
    UG.UserID,
    UG.Username,
    UG.Email,
    O.OrderDate,
    O.StatusCode,
    O.TotalPrice
FROM 
    Orders O
JOIN USERGROUP UG ON O.UserID = UG.UserID;

SELECT 
    O.OrderID,
    UG.Username AS CustomerName,
    I.Name AS ItemName,
    OI.Quantity,
    I.Price,
    (OI.Quantity * I.Price) AS TotalPrice
FROM 
    Orders O
JOIN USERGROUP UG ON O.UserID = UG.UserID
JOIN OrderItem OI ON O.OrderID = OI.OrderID
JOIN Item I ON OI.ItemID = I.ItemID
ORDER BY 
    UG.Username, O.OrderID;

SELECT 
    UG.UserID,
    UG.Username AS CustomerName,
    COUNT(OI.ItemID) AS TotalItemsOrdered,
    SUM(OI.Quantity * I.Price) AS TotalAmountSpent
FROM 
    USERGROUP UG
JOIN Orders O ON UG.UserID = O.UserID
JOIN OrderItem OI ON O.OrderID = OI.OrderID
JOIN Item I ON OI.ItemID = I.ItemID
GROUP BY 
    UG.UserID, UG.Username
ORDER BY 
    TotalAmountSpent DESC;
