import AppError from "../utils/AppError.js";
import config from "../config/db.config.js";
import oracledb from "oracledb";

export class ProductController{
    async getById(req, res, next) {
        try {
            const dbconnection = await oracledb.getConnection(config);
            if (!dbconnection) {
                throw new AppError("Failed to connect to database!", 400);
            }

            const { id } = req.params;
            console.log(id);

            const result = await dbconnection.execute(
                `SELECT 
                    i.ItemID, 
                    i.Name, 
                    CASE 
                        WHEN b.ItemID IS NOT NULL THEN 'book'
                        WHEN t.ItemID IS NOT NULL THEN 'toy'
                        ELSE 'Not Found' 
                    END AS ItemType
                FROM 
                    Item i
                LEFT JOIN 
                    Book b ON i.ItemID = b.ItemID
                LEFT JOIN 
                    Toys t ON i.ItemID = t.ItemID
                WHERE 
                    i.ItemID = :id`,
                { id: { val: id } },
                {
                    outFormat: oracledb.OUT_FORMAT_OBJECT
                }
            );

            console.log(result.rows);
            let bookdetail;
            let toydetail;

            if (result.rows.length > 0) {
                let item = result.rows[0];
                console.log(`Item Type: ${item.ITEMTYPE}`);
    
                // Conditional logic to call DoA or DoB based on ItemType
                if (item.ITEMTYPE === 'book') {
                    console.log("Book");

                    bookdetail = await dbconnection.execute(
                        `SELECT *
                        FROM BOOKINFO
                        WHERE ItemID = :id`,
                        { id: { val: id } },
                        {
                            outFormat: oracledb.OUT_FORMAT_OBJECT
                        }
                    );
                    
                    bookdetail.rows[0].ITEMTYPE = item.ITEMTYPE;
                    console.log(bookdetail.rows);
                    res.status(200).json({
                        status: 'success',
                        data: bookdetail.rows,
                    });
                } else if (item.ITEMTYPE === 'toy') {
                    console.log("Toy");

                    toydetail = await dbconnection.execute(
                        `SELECT *
                        FROM TOYINFO
                        WHERE ItemID = :id`,
                        { id: { val: id } },
                        {
                            outFormat: oracledb.OUT_FORMAT_OBJECT
                        }
                    );

                    toydetail.rows[0].ITEMTYPE = item.ITEMTYPE;
                    console.log(toydetail.rows);
                    res.status(200).json({
                        status: 'success',
                        data: toydetail.rows,
                    });
                } else {
                    console.log("Item not found or is neither Book nor Toy");
                }
    
                // Respond with the data
            } else {
                throw new AppError('Item not found.', 404);
            }    
        } catch (err) {
            console.log(err);
            next(new AppError('Failed to get product info by id.', 400));
        }
    }

    async getByQuantity(req, res, next) {
        try {
            const dbconnection = await oracledb.getConnection(config);
            if (!dbconnection) {
                throw new AppError("Failed to connect to database!", 400);
            }

            let quantity;
            console.log(req);
            quantity = req.query.quantity;
            console.log("Successfully received quantity", quantity);
            if (!quantity) {
                console.log("No input quantity");
                quantity = 10;
            };
            console.log(quantity);

            const result = await dbconnection.execute(
                `SELECT *
                FROM ALLITEM
                FETCH FIRST :quantity ROWS ONLY`, 
                { quantity }, 
                { outFormat: oracledb.OUT_FORMAT_OBJECT }
            );
            console.log(result);

            res.status(200).json({
                status: 'success',
                results: quantity,
                data: result.rows,
            });
        } catch (err) {
            console.log(err);
            next(new AppError('Failed to get product info by quantity.', 400));
        }
    }
}

export default new ProductController();