import {Router} from 'express';
import { getAllStaffListController, getStaffProfileController, postStaffDataController } from '../controllers/staffController';


const router = Router();

router.post('/create-staff-profile', postStaffDataController);
router.get('/staff-list', getAllStaffListController);
router.get('/staff-profile/staff-code/:id', getStaffProfileController);

export default router;