CREATE TABLE USERGROUP (
    UserID NUMBER PRIMARY KEY,
    Email VARCHAR2(100),
    USERNAME VARCHAR2(50),
    GENDER CHAR(1),
    ADDRESS VARCHAR2(255),
    PHONENUM VARCHAR2(15),
    ISMANAGER CHAR(1) CHECK (ISMANAGER IN ('Y', 'N'))
);

CREATE TABLE DELIVERYADDRESS (
    AddressID NUMBER PRIMARY KEY,
    UserID NUMBER,
    FullName VARCHAR2(100),
    Phone VARCHAR2(15),
    DetailAddress VARCHAR2(255),
    Ward VARCHAR2(50),
    District VARCHAR2(50),
    City VARCHAR2(50),
    Province VARCHAR2(50),
    FOREIGN KEY (UserID) REFERENCES USERGROUP(UserID)
);

CREATE TABLE Orders (
    OrderID NUMBER PRIMARY KEY,
    UserID NUMBER,
    OrderDate DATE,
    FOREIGN KEY (UserID) REFERENCES USERGROUP(UserID)
);

CREATE TABLE Item (
    ItemID NUMBER PRIMARY KEY,
    Price NUMBER(10, 2),
    Stock NUMBER,
    Description VARCHAR2(4000)
);

CREATE TABLE Toys (
    ItemID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    ProductionDate DATE,
    Manufacturer VARCHAR2(100),
    FOREIGN KEY (ItemID) REFERENCES Item(ItemID)
);

CREATE TABLE Book (
    ItemID NUMBER PRIMARY KEY,
    ISBN VARCHAR2(20),
    Title VARCHAR2(255),
    Genre VARCHAR2(50),
    PublicationDate DATE,
    FOREIGN KEY (ItemID) REFERENCES Item(ItemID)
);

CREATE TABLE Author (
    AuthorID NUMBER PRIMARY KEY,
    FullName VARCHAR2(100),
    Bio VARCHAR2(255)
);

CREATE TABLE Writes(
    AuthorID NUMBER,
    ItemID NUMBER,
    PRIMARY KEY (AuthorID, ItemID),
    FOREIGN KEY (AuthorID) REFERENCES Author(AuthorID),
    FOREIGN KEY (ItemID) REFERENCES BOOK(ItemID)
);

CREATE TABLE Publisher (
    PublisherID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Address VARCHAR2(255),
    ContactInfo VARCHAR2(100)
);

CREATE TABLE Publishes (
    PublisherID NUMBER,
    ItemID NUMBER,
    PRIMARY KEY (PublisherID, ItemID),
    FOREIGN KEY (PublisherID) REFERENCES Publisher(PublisherID),
    FOREIGN KEY (ItemID) REFERENCES Book(ItemID)
);

CREATE TABLE OrderItem (
    OrderID NUMBER,
    ItemID NUMBER,
    Quantity NUMBER,
    PRIMARY KEY (OrderID, ItemID),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ItemID) REFERENCES Item(ItemID)
);

ALTER TABLE Orders
ADD StatusCode NUMBER DEFAULT 3 NOT NULL;

ALTER TABLE Orders
ADD CONSTRAINT CHK_StatusCode CHECK (StatusCode IN (-1, 0, 1, 2, 3));

ALTER TABLE Item
ADD Name VARCHAR2(100) NOT NULL;

ALTER TABLE Toys DROP COLUMN Name;
ALTER TABLE Book DROP COLUMN Title;

CREATE TABLE ItemImages (
    ImageID NUMBER PRIMARY KEY,
    ItemID NUMBER NOT NULL,
    FOREIGN KEY (ItemID) REFERENCES Item(ItemID)
);

ALTER TABLE Book DROP COLUMN Genre;

CREATE TABLE BookGenre (
    BookID NUMBER NOT NULL,
    Genre VARCHAR2(50) NOT NULL,
    PRIMARY KEY (BookID, Genre),
    FOREIGN KEY (BookID) REFERENCES Book(ItemID)
);

ALTER TABLE Orders
ADD TotalPrice NUMBER(10, 2);