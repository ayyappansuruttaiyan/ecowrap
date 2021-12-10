import express from 'express'
const userRouter = express.Router()
import User from '../models/userModel.js';


userRouter.post(
    '/register',
    (async (req, res) => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      const createdUser = await user.save();
      res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
      });
    })
  );

userRouter.get('/', (async(req, res) => {
    const users = await User.find({});
    res.send(users)
}));

export default userRouter;