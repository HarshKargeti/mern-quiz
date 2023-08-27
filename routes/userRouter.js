import { Router } from 'express';
const router = Router();

import {
  getCurrentUser,
  getApplicationStats
} from '../controllers/userController.js';

import { authorizePermissions} from '../middleware/validationMiddleware.js';

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', authorizePermissions('admin'), getApplicationStats);


export default router;