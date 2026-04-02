import express from 'express';
import siteController from '../app/controllers/siteController.js';

// Khởi tạo mini-app router
const router = express.Router();

// Tuyến đường chi tiết phải xếp trên tuyến đường gốc '/'
// router.get('/:slug', siteController.show);
router.get('/', siteController.index);
//Khi người dùng truy cập vào trang chủ (đường dẫn /) bằng phương thức GET,
// hãy chạy hàm index nằm trong siteController để trả về giao diện cho họ.
export default router;
