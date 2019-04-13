import {Request, Response, Router} from "express";
import Velov from '../../model/Velov';

const router = Router();

interface INearAvailablePlaceRequest {
    lat: string;
    lon: string;
    distance: string
}

export default router.post('/nearAvailableBikes', async function (req: Request, res: Response) {
    const request: INearAvailablePlaceRequest = req.body;

    res.json(
        await Velov.find({
            status: "OPEN",
            available_bikes: {
                $gte: 1
            },
            geometry: {
                $near: {
                    $maxDistance: parseFloat(request.distance),
                    $geometry: {
                        type: "Point",
                        coordinates: [parseFloat(request.lon), parseFloat(request.lat)]
                    }
                }
            }
        })
    );
});
