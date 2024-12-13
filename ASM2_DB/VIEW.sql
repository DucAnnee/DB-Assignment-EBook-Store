
CREATE VIEW book_info AS
SELECT 
    B.itemid,
    B.ISBN,
    BG.Genre,
    B.PublicationDate,
    I.Name AS Title,
    I.Price,
    I.Stock,
    I.Description
FROM 
    Book B
JOIN 
    Item I ON B.ItemID = I.ItemID
LEFT JOIN 
    BookGenre BG ON B.ItemID = BG.BookID;

