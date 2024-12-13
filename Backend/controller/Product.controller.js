import AppError from "../utils/AppError.js";
import dbconnection from "../config/db.config.js";
import oracledb, { maxRows } from "oracledb";

export class ProductController{
    async getById(req, res, next) {
        try {
            if (!dbconnection) {
                throw new AppError("Database connection failed.", 400);
            }

            const { id } = req.params;
            console.log(id);

            const result = await dbconnection.execute(
                `SELECT *
                FROM BOOK_INFO
                WHERE ITEMID = :id;`,
                [id],
                {
                    outFormat: oracledb.OUT_FORMAT_OBJECT
                }
            );

            console.log(result);

            res.status(200).json({
                status: 'success',
                results: 10,
                data: result,
            });
        } catch (err) {
            next(new AppError('Failed to get product info by id.', 400));
        }
    }

    async getByQuantity(req, res, next) {
        try {
            if (!dbconnection) {
                throw new AppError("Database connection failed.", 400);
            }

            let quantity;
            quantity = req.body[quantity];
            if (!quantity) {
                console.log("No input quantity");
                quantity = 10;
            };
            console.log(quantity);

            const result = await dbconnection.execute(
                `SELECT *
                FROM BOOK_INFO`,
                {
                    maxRows: quantity
                }
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