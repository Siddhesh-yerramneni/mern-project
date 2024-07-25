import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const test = (req,res) => {
    res.send("Hello youre at port 3000");
};

export const updatedUser = async(req,res,next) => {
    if(req.user.id != req.params.id) next(errorHandler(401,'Cannot update!'));
    try {
        if(req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set : {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            },
        },
        {new: true}
    );

        const { password, ...rest } = updatedUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};
