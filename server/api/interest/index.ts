import { Router } from 'express';

import all from './all';
import getByName from './getByName';

const router = Router();

router.use(all);
router.use(getByName);

export default router;
