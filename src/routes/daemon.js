import express from 'express';
import daemonController from '../app/controllers/daemonController.js';

// Khởi tạo mini-app router
const router = express.Router();

// Tuyến đường chi tiết phải xếp trên tuyến đường gốc '/'
router.get('/:slug', daemonController.daemon);
router.get('/', daemonController.daemon);

export default router;
