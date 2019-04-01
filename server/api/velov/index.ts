import { Router } from 'express';

import all from './all';
import nearAvailablePlace from './nearAvailablePlace';
import nearAvailableBike from './nearAvailableBike';

const router = Router();

router.use(all);
router.use(nearAvailablePlace);
router.use(nearAvailableBike);

export default router;
