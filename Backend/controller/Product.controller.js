import AppError from "../utils/AppError.js";
import config from "../config/db.config.js";
import oracledb from "oracledb";

export class ProductController{
    async getById(req, res, next) {
        try {
            const dbconnection = await oracledb.getConnection(config);
            if (!dbconnection) {
                throw new AppError("DB NGU!", 400);
            }

            const { id } = req.params;
            console.log({id});

            const result = await dbconnection.execute(
                `SELECT *
                FROM BOOK_INFO
                WHERE ITEMID = :id`,
                { id: { val: id } },
                {
                    outFormat: oracledb.OUT_FORMAT_OBJECT
                }
            );

            console.log(result);

            res.status(200).json({
                status: 'success',
                data: result.rows,
            });
        } catch (err) {
            console.log(err);
            next(new AppError('Failed to get product info by id.', 400));
        }
    }

    async getByQuantity(req, res, next) {
        try {
            if (!dbconnection) {
                throw new AppError("Database connection failed.", 400);
            }

            let quantity;
            console.log(req);
            quantity = req.query.quantity;
            console.log("Successfully received quantity ", quantity);
            if (!quantity) {
                console.log("No input quantity");
                quantity = 10;
            };
            console.log(quantity);

            const result = await dbconnection.execute(
                `SELECT *
                FROM BOOK_INFO`,
                // {
                //     maxRows: quantity
                // }
            );

            console.log(result);

            res.status(200).json({
                status: 'success',
                results: quantity,
                data: result,
            });
        } catch (err) {
            next(new AppError('Failed to get product info by quantity.', 400));
        }
    }
}

export default new ProductController();