import Course from '../models/Course.js';
import {
    mongooseToObject,
    mutipleMongooseToObject,
} from '../../util/mongoose.js';

class SiteController {
    index(req, res, next) {
        //? chưa hiểu đoạn mã dưới làm gì
        Course.find({})
            .then((courses) => {
                // courses = courses.map((course) => course.toObject());
                //courses trong mutipleMongooseToObject()? thiếu thì bị lỗi
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    // show(req, res) {
    //     res.render('search');
    // }
}

//bắt buộc dùng export default instance của class // tại sao có () khi khởi tạo đối tượng
export default new SiteController();

//  Luồng dữ liệu chạy như sau:
//     Course.find({}): Đi vào Database lấy dữ liệu.
//     .then((courses) => { ... }): Database trả về một danh sách, đặt tên là courses.
//     mutipleMongooseToObject(courses): Chuyển danh sách courses đó từ dạng "Mongoose Document" sang "Plain Object" để Handlebars có thể đọc được.
//     res.render('home', { courses: ... }): Đẩy dữ liệu sạch đó sang file home.handlebars.
