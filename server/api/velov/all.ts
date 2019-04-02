import { Request, Response, Router } from "express";
import Velov from '../../model/Velov';

const router = Router();

export default router.get('/', async function (req: Request, res: Response) {
    res.json(await Velov.find());
});
