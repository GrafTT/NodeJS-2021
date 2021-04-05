
import express, { Router, Request, Response } from "express";
import { ValidatedRequest } from 'express-joi-validation'
import { loginList, userList } from "./staticData";
import { validator, userQuerySchema, UserSchema } from './validators'

const router: Router = express.Router();

let tempUserList = [...userList];


router.use(express.urlencoded({ extended: true }));
router.use(express.json());


router.get('/user/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const user = tempUserList.find(item => item.id === id);
    if (user) {
        return res.status(200).json(user);
    } else {
        res.send('User not found')
    }
});

router.post('/user', validator.body(userQuerySchema), (req: ValidatedRequest<UserSchema>, res: Response) => {
    const user = req.body;
    // is exist -> update else create
    res.send(200);

});

router.delete('/user/:id', (req: Request, res: Response) => {
    const id = req.params?.id;
    const user = tempUserList.find(item => item.id === id);
    if (user) {
        user.isDeleted = true;
        return res.status(200).send('User has been deleted.');
    } else {
        res.send('User not found');
    }
});

router.get('/logins', (req: Request, res: Response) => {
    const subStr = String(req?.query?.substr);
    const limit = Number(req.query.limit);
    const result = loginList.filter(item => item.includes(subStr)).splice(0, limit).sort();
    res.status(200).json(result);
});


export default router;