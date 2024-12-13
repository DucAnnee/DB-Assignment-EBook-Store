import AppError from "../utils/AppError.js";
import dbconnection from "../config/db.config.js";
import oracledb from "oracledb";

export class ProductController{
    async getById(req, res, next) {
        try {
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

            if (!dbconnection) {
                throw new Error("Database connection failed.");
            }

            console.log(result);

            res.status(200).json({
                status: 'success',
                results: 10,
                data: result,
            });
        } catch (err) {
            next(new AppError('Failed to get product info.', 400));
        }
    }
}

export default new ProductController();