import Course from '../models/Course.js';
import {
    mongooseToObject,
    mutipleMongooseToObject,
} from '../../util/mongoose.js';

class CourseController {
    show(req, res, next) {
        // 1. Sửa thành req.params
        // 2. Xóa dấu ; sau hàm findOne để chuỗi Promise không bị ngắt
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
}
//bắt buộc dùng export default instance của class // tại sao có () khi khởi tạo đối tượng
export default new CourseController();
