CREATE VIEW BookInfo AS
SELECT 
    i.ItemID,
    i.Name,
    i.Price,
    i.Stock,
    i.Description,
    b.ISBN,
    b.PublicationDate,
    bg.Genre,
    a.FullName AS AuthorName,
    p.Name AS PublisherName,
    p.ContactInfo AS PublisherContactInfo
FROM 
    Item i
JOIN 
    Book b ON i.ItemID = b.ItemID
LEFT JOIN 
    BookGenre bg ON b.ItemID = bg.BookID
LEFT JOIN 
    Writes w ON b.ItemID = w.ItemID
LEFT JOIN 
    Author a ON w.AuthorID = a.AuthorID
LEFT JOIN 
    Publishes pbl ON b.ItemID = pbl.ItemID
LEFT JOIN 
    Publisher p ON pbl.PublisherID = p.PublisherID;


CREATE VIEW ToyInfo AS
SELECT 
    i.ItemID,
    i.Name,
    i.Price,
    i.Stock,
    i.Description,
    t.ProductionDate,
    t.Manufacturer
FROM 
    Item i
JOIN 
    Toys t ON i.ItemID = t.ItemID;;


CREATE VIEW ALLITEM AS
SELECT 
    i.ItemID,
    i.Name,
    i.Price,
    i.Stock,
    i.Description,
    -- Book-specific columns, NULL if item is not a book
    b.ISBN,
    b.PublicationDate,
    bg.Genre,
    -- Author information, NULL if item is not a book
    a.FullName AS AuthorName,
    -- Publisher information, NULL if item is not a book
    p.Name AS PublisherName,
    p.ContactInfo AS PublisherContactInfo,
    -- Toy-specific columns, NULL if item is not a toy
    t.ProductionDate,
    t.Manufacturer
FROM 
    Item i
-- LEFT JOIN with Book to get book-specific information
LEFT JOIN 
    Book b ON i.ItemID = b.ItemID
LEFT JOIN 
    BookGenre bg ON b.ItemID = bg.BookID
LEFT JOIN 
    Writes w ON b.ItemID = w.ItemID
LEFT JOIN 
    Author a ON w.AuthorID = a.AuthorID
LEFT JOIN 
    Publishes pbl ON b.ItemID = pbl.ItemID
LEFT JOIN 
    Publisher p ON pbl.PublisherID = p.PublisherID
-- LEFT JOIN with Toys to get toy-specific information
LEFT JOIN 
    Toys t ON i.ItemID = t.ItemID;