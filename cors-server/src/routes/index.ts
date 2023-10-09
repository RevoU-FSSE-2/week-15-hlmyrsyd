import { Router } from 'express';
import Transaction from './transaction';
import dashboardRoutes from './dashboard';
import preventAttackController from './preventAttack';

const router = Router();

router.use('/', dashboardRoutes);
router.use('/api/v1/attack', preventAttackController);
router.use('/api/v1/transaction', Transaction);

export default router;
