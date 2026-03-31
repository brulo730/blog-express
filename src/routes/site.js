import express from 'express';
import siteController from '../app/controllers/siteController.js';

// Khởi tạo mini-app router
const router = express.Router();

// Tuyến đường chi tiết phải xếp trên tuyến đường gốc '/'
// router.get('/:slug', siteController.show);
router.get('/', siteController.index);

export default router;
