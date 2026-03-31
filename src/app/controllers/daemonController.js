import Course from '../models/Course.js';

class DaemonController {
    async daemon(req, res) {
        //async index(req, res) bi loi do dau
        try {
            //     // 1. Khởi tạo một đối tượng (Bản ghi) mới dựa trên bản thiết kế Model
            //     const newCourse = new Course({
            //         name: 'Khóa học Node.js Backend',
            //         description: 'Kiến trúc MVC và Mongoose',
            //         image: 'https://topdev.vn/blog/wp-content/uploads/2021/07/mo-hinh-mvc-hoat-dong-nhu-the-nao.jpg',
            //     });
            //     // 2. Lưu lên MongoDB Atlas
            //     await newCourse.save();
            //     console.log('[SYSTEM] Đã lưu khóa học thành công lên Cloud!');
            //     // 3. Lấy lại danh sách vừa lưu để hiển thị
            //     const courses = await Course.find({});
            res.json(courses);
        } catch (error) {
            res.status(400).json({ error: 'Lỗi' });
        }
    }
}

//bắt buộc dùng export default instance của class // tại sao có () khi khởi tạo đối tượng
export default new DaemonController();
