BEGIN
    -- Book 1: Đất Rừng Phương Nam
    insert_item_and_subclass(
        p_name => 'Đất Rừng Phương Nam', 
        p_price => 456000, 
        p_stock => 50, 
        p_description => 'Tác phẩm kinh điển của Đoàn Giỏi', 
        p_type => 'Book', 
        p_imagePath => 'dat-rung-phuong-nam.jpg',
        p_isbn => '978-604-58-12345', 
        p_publisher_name => 'NXB Kim Đồng', 
        p_puplisher_address => 'Hà Nội, Việt Nam', 
        p_puplisher_contact => '0241234567', 
        p_author_Name => 'Đoàn Giỏi', 
        p_author_Bio => 'Nhà văn nổi tiếng Việt Nam', 
        p_genre => 'Adventure'
    );

    -- Book 2: Harry Potter và Bảo Bối Tử Thần
    insert_item_and_subclass(
        p_name => 'Harry Potter và Bảo Bối Tử Thần', 
        p_price => 540000, 
        p_stock => 30, 
        p_description => 'Tập cuối của bộ truyện Harry Potter của J.K. Rowling', 
        p_type => 'Book', 
        p_imagePath => 'hp-baoboituthan.jpg',
        p_isbn => '978-604-99-12301', 
        p_publisher_name => 'NXB Trẻ', 
        p_puplisher_address => 'TP Hồ Chí Minh, Việt Nam', 
        p_puplisher_contact => '0281234567', 
        p_author_Name => 'J.K. Rowling', 
        p_author_Bio => 'Tác giả nổi tiếng người Anh', 
        p_genre => 'Fantasy'
    );

    -- Book 3: Harry Potter và Chiếc Cốc Lửa
    insert_item_and_subclass(
        p_name => 'Harry Potter và Chiếc Cốc Lửa', 
        p_price => 480000, 
        p_stock => 40, 
        p_description => 'Tập 4 của bộ truyện Harry Potter của J.K. Rowling', 
        p_type => 'Book', 
        p_imagePath => 'hp-chieccoclua.jpg',
        p_isbn => '978-604-99-12302', 
        p_publisher_name => 'NXB Trẻ', 
        p_puplisher_address => 'TP Hồ Chí Minh, Việt Nam', 
        p_puplisher_contact => '0281234567', 
        p_author_Name => 'J.K. Rowling', 
        p_author_Bio => 'Tác giả nổi tiếng người Anh', 
        p_genre => 'Fantasy'
    );

    -- Book 4: Harry Potter và Hoàng Tử Lai
    insert_item_and_subclass(
        p_name => 'Harry Potter và Hoàng Tử Lai', 
        p_price => 520000, 
        p_stock => 35, 
        p_description => 'Tập 6 của bộ truyện Harry Potter của J.K. Rowling', 
        p_type => 'Book', 
        p_imagePath => 'hp-hoangtulai.jpg',
        p_isbn => '978-604-99-12303', 
        p_publisher_name => 'NXB Trẻ', 
        p_puplisher_address => 'TP Hồ Chí Minh, Việt Nam', 
        p_puplisher_contact => '0281234567', 
        p_author_Name => 'J.K. Rowling', 
        p_author_Bio => 'Tác giả nổi tiếng người Anh', 
        p_genre => 'Fantasy'
    );

    -- Book 5: Làm Bạn Với Bầu Trời
    insert_item_and_subclass(
        p_name => 'Làm Bạn Với Bầu Trời', 
        p_price => 300000, 
        p_stock => 45, 
        p_description => 'Cuốn sách của Nguyễn Ngọc Tư về tình bạn và cuộc sống', 
        p_type => 'Book', 
        p_imagePath => 'nna-lambanvoibautroi.jpg',
        p_isbn => '978-604-78-12367', 
        p_publisher_name => 'NXB Trẻ', 
        p_puplisher_address => 'TP Hồ Chí Minh, Việt Nam', 
        p_puplisher_contact => '0281234567', 
        p_author_Name => 'Nguyễn Ngọc Tư', 
        p_author_Bio => 'Nhà văn nổi tiếng của Việt Nam', 
        p_genre => 'Fiction'
    );

    -- Book 6: Harry Potter và Hòn Đá Phù Thủy
    insert_item_and_subclass(
        p_name => 'Harry Potter và Hòn Đá Phù Thủy', 
        p_price => 450000, 
        p_stock => 50, 
        p_description => 'Tập 1 của bộ truyện Harry Potter của J.K. Rowling', 
        p_type => 'Book', 
        p_imagePath => 'hp-hondaphuthuy.jpg',
        p_isbn => '978-604-99-12304', 
        p_publisher_name => 'NXB Trẻ', 
        p_puplisher_address => 'TP Hồ Chí Minh, Việt Nam', 
        p_puplisher_contact => '0281234567', 
        p_author_Name => 'J.K. Rowling', 
        p_author_Bio => 'Tác giả nổi tiếng người Anh', 
        p_genre => 'Fantasy'
    );
    insert_item_and_subclass(
        p_name => 'Harry Potter và Phòng Chứa Bí Mật', 
        p_price => 470000, 
        p_stock => 30, 
        p_description => 'Tập 2 của bộ truyện Harry Potter của J.K. Rowling', 
        p_type => 'Book', 
        p_imagePath => 'hp-phongchuabimat.jpg',
        p_isbn => '978-604-99-12305', 
        p_publisher_name => 'NXB Trẻ', 
        p_puplisher_address => 'TP Hồ Chí Minh, Việt Nam', 
        p_puplisher_contact => '0281234567', 
        p_author_Name => 'J.K. Rowling', 
        p_author_Bio => 'Tác giả nổi tiếng người Anh', 
        p_genre => 'Fantasy'
    );

    insert_item_and_subclass(
        p_name => 'Mắt Biếc', 
        p_price => 330000, 
        p_stock => 40, 
        p_description => 'Tác phẩm lãng mạn nổi tiếng của Nguyễn Nhật Ánh', 
        p_type => 'Book', 
        p_imagePath => 'nna - matbiec.jpg',
        p_isbn => '978-604-89-67890', 
        p_publisher_name => 'NXB Trẻ', 
        p_puplisher_address => 'TP Hồ Chí Minh, Việt Nam', 
        p_puplisher_contact => '0281234567', 
        p_author_Name => 'Nguyễn Nhật Ánh', 
        p_author_Bio => 'Tác giả văn học thiếu nhi nổi tiếng', 
        p_genre => 'Romance'
    );

    -- Book: Những Kẻ Xuất Chúng
    insert_item_and_subclass(
        p_name => 'Những Kẻ Xuất Chúng', 
        p_price => 340000, 
        p_stock => 25, 
        p_description => 'Cuốn sách về những người thay đổi thế giới của Malcolm Gladwell', 
        p_type => 'Book', 
        p_imagePath => 'nhungkexuatchung.jpg',
        p_isbn => '978-604-78-34567', 
        p_publisher_name => 'NXB Tổng Hợp TP.HCM', 
        p_puplisher_address => 'TP Hồ Chí Minh, Việt Nam', 
        p_puplisher_contact => '0289876543', 
        p_author_Name => 'Malcolm Gladwell', 
        p_author_Bio => 'Nhà văn và nhà báo nổi tiếng người Canada', 
        p_genre => 'Non-Fiction'
    );

    -- Book: Tôi Thấy Hoa Vàng Trên Cỏ Xanh
    insert_item_and_subclass(
        p_name => 'Tôi Thấy Hoa Vàng Trên Cỏ Xanh', 
        p_price => 350000, 
        p_stock => 35, 
        p_description => 'Một tác phẩm nổi tiếng của Nguyễn Nhật Ánh về tuổi thơ', 
        p_type => 'Book', 
        p_imagePath => 'nna - toithayhoavangtrencoxanh.jpg',
        p_isbn => '978-604-78-23456', 
        p_publisher_name => 'NXB Trẻ', 
        p_puplisher_address => 'TP Hồ Chí Minh, Việt Nam', 
        p_puplisher_contact => '0281234567', 
        p_author_Name => 'Nguyễn Nhật Ánh', 
        p_author_Bio => 'Tác giả văn học thiếu nhi nổi tiếng', 
        p_genre => 'Fiction'
    );

    -- Book 7: Ngồi Khóc Trên Cây
    insert_item_and_subclass(
        p_name => 'Ngồi Khóc Trên Cây', 
        p_price => 320000, 
        p_stock => 40, 
        p_description => 'Một tác phẩm cảm động của Nguyễn Nhật Ánh', 
        p_type => 'Book', 
        p_imagePath => 'nna-ngoikhoctrencay.jpg',
        p_isbn => '978-604-78-54321', 
        p_publisher_name => 'NXB Trẻ', 
        p_puplisher_address => 'TP Hồ Chí Minh, Việt Nam', 
        p_puplisher_contact => '0281234567', 
        p_author_Name => 'Nguyễn Nhật Ánh', 
        p_author_Bio => 'Tác giả văn học thiếu nhi nổi tiếng', 
        p_genre => 'Romance'
    );

    -- Book 8: Quán Gò Đi Lên
    insert_item_and_subclass(
        p_name => 'Quán Gò Đi Lên', 
        p_price => 290000, 
        p_stock => 30, 
        p_description => 'Tác phẩm nổi tiếng của Nguyễn Ngọc Tư', 
        p_type => 'Book', 
        p_imagePath => 'nna-quangodilen.jpg',
        p_isbn => '978-604-78-98765', 
        p_publisher_name => 'NXB Trẻ', 
        p_puplisher_address => 'TP Hồ Chí Minh, Việt Nam', 
        p_puplisher_contact => '0281234567', 
        p_author_Name => 'Nguyễn Ngọc Tư', 
        p_author_Bio => 'Nhà văn nổi tiếng của Việt Nam', 
        p_genre => 'Fiction'
    );

    -- Book 1: Đắc Nhân Tâm
    insert_item_and_subclass(
        p_name => 'Đắc Nhân Tâm', 
        p_price => 290000, 
        p_stock => 45, 
        p_description => 'Cuốn sách kỹ năng sống nổi tiếng của Dale Carnegie', 
        p_type => 'Book', 
        p_imagePath => 'dacnhantam86.jpg',
        p_isbn => '978-604-99-45678', 
        p_publisher_name => 'NXB Tổng Hợp TP.HCM', 
        p_puplisher_address => 'TP Hồ Chí Minh, Việt Nam', 
        p_puplisher_contact => '0289876543', 
        p_author_Name => 'Dale Carnegie', 
        p_author_Bio => 'Nhà văn và diễn giả người Mỹ nổi tiếng', 
        p_genre => 'Self-Help'
    );

    -- Book 2: Cây Cam Ngọt Của Tôi
    insert_item_and_subclass(
        p_name => 'Cây Cam Ngọt Của Tôi', 
        p_price => 310000, 
        p_stock => 30, 
        p_description => 'Tác phẩm nổi tiếng của José Mauro de Vasconcelos', 
        p_type => 'Book', 
        p_imagePath => 'caycamngotcuatoi01.jpg',
        p_isbn => '978-604-78-45679', 
        p_publisher_name => 'NXB Kim Đồng', 
        p_puplisher_address => 'Hà Nội, Việt Nam', 
        p_puplisher_contact => '0241234567', 
        p_author_Name => 'José Mauro de Vasconcelos', 
        p_author_Bio => 'Nhà văn người Brazil', 
        p_genre => 'Fiction'
    );

    -- Book 3: Bố Già
    insert_item_and_subclass(
        p_name => 'Bố Già', 
        p_price => 350000, 
        p_stock => 25, 
        p_description => 'Tiểu thuyết kinh điển của Mario Puzo', 
        p_type => 'Book', 
        p_imagePath => 'bo-gia_1_1.jpg',
        p_isbn => '978-604-45-56788', 
        p_publisher_name => 'NXB Hội Nhà Văn', 
        p_puplisher_address => 'Hà Nội, Việt Nam', 
        p_puplisher_contact => '0249876543', 
        p_author_Name => 'Mario Puzo', 
        p_author_Bio => 'Nhà văn người Mỹ nổi tiếng', 
        p_genre => 'Crime'
    );

    -- Book 6: Chiến Binh Cầu Vồng
    insert_item_and_subclass(
        p_name => 'Chiến Binh Cầu Vồng', 
        p_price => 340000, 
        p_stock => 40, 
        p_description => 'Cuốn sách của Andrea Hirata về tinh thần vượt khó', 
        p_type => 'Book', 
        p_imagePath => 'chienbinhcauvong.jpg',
        p_isbn => '978-604-67-23456', 
        p_publisher_name => 'NXB Trẻ', 
        p_puplisher_address => 'TP Hồ Chí Minh, Việt Nam', 
        p_puplisher_contact => '0281234567', 
        p_author_Name => 'Andrea Hirata', 
        p_author_Bio => 'Nhà văn nổi tiếng người Indonesia', 
        p_genre => 'Inspiration'
    );

    -- Book 7: Số Đỏ
    insert_item_and_subclass(
        p_name => 'Số Đỏ', 
        p_price => 300000, 
        p_stock => 45, 
        p_description => 'Tác phẩm châm biếm nổi tiếng của Vũ Trọng Phụng', 
        p_type => 'Book', 
        p_imagePath => 'Sodo.jpg',
        p_isbn => '978-604-45-34567', 
        p_publisher_name => 'NXB Văn Học', 
        p_puplisher_address => 'Hà Nội, Việt Nam', 
        p_puplisher_contact => '0246543210', 
        p_author_Name => 'Vũ Trọng Phụng', 
        p_author_Bio => 'Nhà văn nổi tiếng của Việt Nam', 
        p_genre => 'Satire'
    );
    
    COMMIT;
END;
/

BEGIN
    insert_item_and_subclass('Xe Hơi Điều Khiển', 480000, 30, 'Xe hơi điều khiển từ xa', 'Toys', NULL, TO_DATE('2023-03-01', 'YYYY-MM-DD'), 'ToyCo Ltd');
    insert_item_and_subclass('Bộ Xếp Hình Lego', 1200000, 20, 'Bộ xếp hình Lego nhiều mảnh', 'Toys', NULL, TO_DATE('2023-05-01', 'YYYY-MM-DD'), 'Lego Group');
    insert_item_and_subclass('Búp Bê Công Chúa', 600000, 40, 'Búp bê công chúa dành cho bé gái', 'Toys', NULL, TO_DATE('2023-02-10', 'YYYY-MM-DD'), 'DreamToys');
    insert_item_and_subclass('Gấu Bông Teddy', 720000, 50, 'Gấu bông mềm mại', 'Toys', NULL, TO_DATE('2023-06-01', 'YYYY-MM-DD'), 'CuddleToys Inc');
    insert_item_and_subclass('Bộ Đồ Chơi Nhà Bếp', 960000, 25, 'Bộ đồ chơi nhà bếp cho bé gái', 'Toys', NULL, TO_DATE('2023-04-25', 'YYYY-MM-DD'), 'PlayKitchen Co.');
    insert_item_and_subclass('Bộ Trò Chơi Cờ Tỷ Phú', 480000, 35, 'Trò chơi cờ tỷ phú cho gia đình', 'Toys', NULL, TO_DATE('2023-07-10', 'YYYY-MM-DD'), 'BoardGames Ltd');
    insert_item_and_subclass('Robot Điều Khiển', 1440000, 15, 'Robot điều khiển từ xa', 'Toys', NULL, TO_DATE('2023-03-15', 'YYYY-MM-DD'), 'RobotTech');
    insert_item_and_subclass('Bộ Lắp Ráp Xe Tăng', 840000, 20, 'Bộ lắp ráp xe tăng cho trẻ em', 'Toys', NULL, TO_DATE('2023-08-01', 'YYYY-MM-DD'), 'ToyArmy Co.');
    insert_item_and_subclass('Bộ Ghép Hình Puzzle', 360000, 60, 'Bộ ghép hình giúp phát triển trí não', 'Toys', NULL, TO_DATE('2023-04-01', 'YYYY-MM-DD'), 'PuzzleMakers');
    insert_item_and_subclass('Tàu Lửa Điện', 960000, 25, 'Tàu lửa điện chạy pin', 'Toys', NULL, TO_DATE('2023-09-01', 'YYYY-MM-DD'), 'TrainWorld Ltd');
    COMMIT;
END;
/
BEGIN
    -- Toy 1
    insert_item_and_subclass(
        p_name => 'Xe Hơi Điều Khiển', 
        p_price => 480000, 
        p_stock => 30, 
        p_description => 'Xe hơi điều khiển từ xa', 
        p_type => 'Toys', 
        p_isbn => NULL, 
        p_production_date => TO_DATE('2023-03-01', 'YYYY-MM-DD'), 
        p_manufacturer => 'ToyCo Ltd', 
        p_imagePath => 'XehoiDieukhienTuxa.jpg'
    );

    -- Toy 2
    insert_item_and_subclass(
        p_name => 'Bộ Xếp Hình Lego', 
        p_price => 1200000, 
        p_stock => 20, 
        p_description => 'Bộ xếp hình Lego nhiều mảnh', 
        p_type => 'Toys', 
        p_isbn => NULL, 
        p_production_date => TO_DATE('2023-05-01', 'YYYY-MM-DD'), 
        p_manufacturer => 'Lego Group', 
        p_imagePath => 'BoXepHinhLegor.jpg'
    );

    -- Toy 3
    insert_item_and_subclass(
        p_name => 'Búp Bê Công Chúa', 
        p_price => 600000, 
        p_stock => 40, 
        p_description => 'Búp bê công chúa dành cho bé gái', 
        p_type => 'Toys', 
        p_isbn => NULL, 
        p_production_date => TO_DATE('2023-02-10', 'YYYY-MM-DD'), 
        p_manufacturer => 'DreamToys', 
        p_imagePath => 'bup-be-cong-chua-elsa-kitchen-set-1.jpg'
    );

    -- Toy 4
    insert_item_and_subclass(
        p_name => 'Gấu Bông Teddy', 
        p_price => 720000, 
        p_stock => 50, 
        p_description => 'Gấu bông mềm mại', 
        p_type => 'Toys', 
        p_isbn => NULL, 
        p_production_date => TO_DATE('2023-06-01', 'YYYY-MM-DD'), 
        p_manufacturer => 'CuddleToys Inc', 
        p_imagePath => 'GaubongTeddy1.jpg'
    );

    -- Toy 5
    insert_item_and_subclass(
        p_name => 'Bộ Đồ Chơi Nhà Bếp', 
        p_price => 960000, 
        p_stock => 25, 
        p_description => 'Bộ đồ chơi nhà bếp cho bé gái', 
        p_type => 'Toys', 
        p_isbn => NULL, 
        p_production_date => TO_DATE('2023-04-25', 'YYYY-MM-DD'), 
        p_manufacturer => 'PlayKitchen Co.', 
        p_imagePath => 'DoChoiNhaBep.jpg'
    );

    -- Toy 6
    insert_item_and_subclass(
        p_name => 'Bộ Trò Chơi Cờ Tỷ Phú', 
        p_price => 480000, 
        p_stock => 35, 
        p_description => 'Trò chơi cờ tỷ phú cho gia đình', 
        p_type => 'Toys', 
        p_isbn => NULL, 
        p_production_date => TO_DATE('2023-07-10', 'YYYY-MM-DD'), 
        p_manufacturer => 'BoardGames Ltd', 
        p_imagePath => 'co-ty-phu-monopoly_4.jpg'
    );

    -- Toy 7
    insert_item_and_subclass(
        p_name => 'Robot Điều Khiển', 
        p_price => 1440000, 
        p_stock => 15, 
        p_description => 'Robot điều khiển từ xa', 
        p_type => 'Toys', 
        p_isbn => NULL, 
        p_production_date => TO_DATE('2023-03-15', 'YYYY-MM-DD'), 
        p_manufacturer => 'RobotTech', 
        p_imagePath => 'RobotDieuKhienTuXa.jpg'
    );

    -- Toy 8
    insert_item_and_subclass(
        p_name => 'Bộ Lắp Ráp Xe Tăng', 
        p_price => 840000, 
        p_stock => 20, 
        p_description => 'Bộ lắp ráp xe tăng cho trẻ em', 
        p_type => 'Toys', 
        p_isbn => NULL, 
        p_production_date => TO_DATE('2023-08-01', 'YYYY-MM-DD'), 
        p_manufacturer => 'ToyArmy Co.', 
        p_imagePath => 'LaprapXetang.jpg'
    );

    -- Toy 9
    insert_item_and_subclass(
        p_name => 'Bộ Ghép Hình Puzzle', 
        p_price => 360000, 
        p_stock => 60, 
        p_description => 'Bộ ghép hình giúp phát triển trí não', 
        p_type => 'Toys', 
        p_isbn => NULL, 
        p_production_date => TO_DATE('2023-04-01', 'YYYY-MM-DD'), 
        p_manufacturer => 'PuzzleMakers', 
        p_imagePath => 'XepHinhPuzzle.png'
    );

    -- Toy 10
    insert_item_and_subclass(
        p_name => 'Tàu Lửa Điện', 
        p_price => 960000, 
        p_stock => 25, 
        p_description => 'Tàu lửa điện chạy pin', 
        p_type => 'Toys', 
        p_isbn => NULL, 
        p_production_date => TO_DATE('2023-09-01', 'YYYY-MM-DD'), 
        p_manufacturer => 'TrainWorld Ltd', 
        p_imagePath => 'TauLuaDien.jpg'
    );

    COMMIT;
END;
/


BEGIN
    -- Insert Regular Users
    INSERT INTO UserGroup (UserID, Username, Email, Address, PhoneNum, Gender, isManager)
    VALUES (2001, 'nguyenvana', 'nguyenvana@gmail.com', '123 Lê Lợi, Hà Nội', '0901123456', 'M', 'N');

    INSERT INTO UserGroup (UserID, Username, Email, Address, PhoneNum, Gender, isManager)
    VALUES (2002, 'tranthib', 'tranthib@gmail.com', '456 Nguyễn Huệ, TP HCM', '0912234567', 'F', 'N');

    INSERT INTO UserGroup (UserID, Username, Email, Address, PhoneNum, Gender, isManager)
    VALUES (2004, 'lethihanh', 'lethihanh@gmail.com', '321 Lý Thái Tổ, Huế', '0934456789', 'F', 'N');

    -- Insert Manager Users
    INSERT INTO UserGroup (UserID, Username, Email, Address, PhoneNum, Gender, isManager)
    VALUES (3001, 'admin_manager', 'manager1@toystore.com', '123 Admin Street, Hà Nội', '0987654321', 'M', 'Y');

    COMMIT;
END;
/
 

BEGIN
    -- Orders for UserID 2001
    INSERT INTO Orders (OrderID, UserID, OrderDate, StatusCode, TotalPrice)
    VALUES (101, 2001, TO_DATE('2024-06-12', 'YYYY-MM-DD'), 3, 0);

    -- Orders for UserID 2002
    INSERT INTO Orders (OrderID, UserID, OrderDate, StatusCode, TotalPrice)
    VALUES (102, 2002, TO_DATE('2024-06-13', 'YYYY-MM-DD'), 1, 0);

    -- Orders for UserID 3001 (Manager)
    INSERT INTO Orders (OrderID, UserID, OrderDate, StatusCode, TotalPrice)
    VALUES (103, 2001, TO_DATE('2024-06-14', 'YYYY-MM-DD'), 0, 0);

    COMMIT;
END;
/

BEGIN
    -- Order 101: 2 Lego Sets for UserID 2001
    INSERT INTO OrderItem (OrderID, ItemID, Quantity)
    VALUES (101, 100070, 2);

    -- Order 102: 1 Gấu Bông Teddy and 1 Xe Hơi Điều Khiển for UserID 2002
    INSERT INTO OrderItem (OrderID, ItemID, Quantity)
    VALUES (102, 100080, 1);

    INSERT INTO OrderItem (OrderID, ItemID, Quantity)
    VALUES (102, 100075, 1);

    -- Order 103: 1 Book "Đất Rừng Phương Nam" for UserID 3001
    INSERT INTO OrderItem (OrderID, ItemID, Quantity)
    VALUES (103, 100085, 1);

    COMMIT;
END;
/

BEGIN
    -- Delivery Address for UserID 2001
    INSERT INTO DELIVERYADDRESS (AddressID, UserID, FullName, Phone, DetailAddress, Ward, District, City, Province)
    VALUES (1, 2001, 'Nguyen Van A', '0901122334', '123 Main St', 'Ward 1', 'District 1', 'Hanoi', 'Hanoi');

    -- Delivery Address for UserID 2002
    INSERT INTO DELIVERYADDRESS (AddressID, UserID, FullName, Phone, DetailAddress, Ward, District, City, Province)
    VALUES (2, 2002, 'Tran Thi B', '0902233445', '456 Le Loi St', 'Ward 3', 'District 2', 'Ho Chi Minh City', 'HCMC');

    -- Additional Address for UserID 2001
    INSERT INTO DELIVERYADDRESS (AddressID, UserID, FullName, Phone, DetailAddress, Ward, District, City, Province)
    VALUES (4, 2001, 'Nguyen Van A', '0901122334', '99 Nguyen Trai', 'Ward 5', 'District 4', 'Hanoi', 'Hanoi');

    -- Additional Address for UserID 2002
    INSERT INTO DELIVERYADDRESS (AddressID, UserID, FullName, Phone, DetailAddress, Ward, District, City, Province)
    VALUES (5, 2002, 'Tran Thi B', '0902233445', '321 Vo Van Tan', 'Ward 7', 'District 5', 'Ho Chi Minh City', 'HCMC');

    COMMIT;
END;
/