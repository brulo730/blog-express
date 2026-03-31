import express from 'express';
import courseController from '../app/controllers/courseController.js';

// Khởi tạo mini-app router
const router = express.Router();

// Tuyến đường chi tiết phải xếp trên tuyến đường gốc '/'
router.get('/:slug', courseController.show);
// router.get('/', courseController.show);
export default router;
