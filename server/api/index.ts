import { Router } from 'express';

import velov from './velov/index';
import quarter from './quarters/index';
import interest from './interest/index';

const router = Router();

router.use('/velov', velov);
router.use('/quarter', quarter);
router.use('/interest', interest);

export default router;