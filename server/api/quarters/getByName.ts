import { Router, Request, Response} from "express";
import Quarter from '../../model/Quarter';

const router = Router();

interface IQuarterNameRequest {
    name: string
}

export default router.get('/name', async function (req: Request, res: Response) {
    const request: IQuarterNameRequest = req.body;

    res.json(await Quarter.findOne({name: request.name}));
});
