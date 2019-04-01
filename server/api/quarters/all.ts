import { Router, Request, Response} from "express";
import Quarter from '../../model/Quarter';

const router = Router();

export default router.get('/', async function (req: Request, res: Response) {
    res.json(await Quarter.find());
});
