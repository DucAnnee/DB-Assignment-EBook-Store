import dbconnection from "../config/db.config.js";
import AppError from "../utils/AppError.js";
import OracleDB from "oracledb";

export class UserController {
    async updateInfo(req, res, next) {
        if (!dbconnection) {
            throw new AppError("Failed to connect to database!", 400);
        }

        const updatedInfo = req.body;
    }

    async getUserInfo(req, res, next) {
        if (!dbconnection) {
            throw new AppError("Failed to connect to database!", 400);
        }

        const id = req.params;

        const result = await dbconnection.execute(
            `SELECT * 
            FROM usergroup
            WHERE USERID = :id`,
            [id],
            { outFormat: OracleDB.OUT_FORMAT_OBJECT }
        );

        console.log(result);

        res.status(200).json({
            status: 'success',
            data: result,
        });
    }
}

export default new UserController();