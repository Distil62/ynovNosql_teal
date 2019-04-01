import { Router, Request, Response} from "express";
import Interest from '../../model/Interest';

const router = Router();

export default router.get('/', async function (req: Request, res: Response) {
    res.json(await Interest.find());
});
