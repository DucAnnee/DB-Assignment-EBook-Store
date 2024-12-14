import AppError from "../utils/AppError.js";
import config  from "../config/db.config.js";
import OracleDB from "oracledb";

export class AuthController {
    async login (req,res,next) {
        try {
            const dbconnection = await OracleDB.getConnection(config);
            if (!dbconnection) {
                throw new AppError("Failed to connect to database!", 400);
            }

            const {username, password} = req.body;
            if(!username || !password) {
            return next(new AppError("Please provide username or password!",400));
            }

            const result = await dbconnection.execute(
                `SELECT * 
                FROM usergroup
                WHERE USERNAME = :username`,
                { username: { val: username } },
                { outFormat: OracleDB.OUT_FORMAT_OBJECT }
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
}

export default new AuthController();