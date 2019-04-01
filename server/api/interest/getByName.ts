import { Router, Request, Response} from "express";
import Interest from '../../model/Interest';

const router = Router();

interface IInterestNameRequest {
    name: string
}

export default router.get('/name', async function (req: Request, res: Response) {
    const request: IInterestNameRequest = req.body;

    res.json(await Interest.findOne({nom: request.name}));
});
