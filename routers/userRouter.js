import express from 'express'
const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    const users = User.find({});
    res.send(users)
});

export default userRouter;