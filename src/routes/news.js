import express from 'express';
import newsController from '../app/controllers/newsController.js';

// Khởi tạo mini-app router
const router = express.Router();

// Tuyến đường chi tiết phải xếp trên tuyến đường gốc '/'
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

export default router;
