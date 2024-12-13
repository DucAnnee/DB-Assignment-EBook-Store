import dbconnection from "../config/db.config.js";
import AppError from "../utils/AppError.js";

export class UserController {
    async updateInfo(req, res, next) {
        if (!dbconnection) {
            throw new AppError("Failed to connect to database!", 400);
        }

        const updatedInfo = req.body;
    }
}

export default new UserController();