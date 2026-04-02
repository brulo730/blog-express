import Course from '../models/Course.js';
import {
    mongooseToObject,
    mutipleMongooseToObject,
} from '../../util/mongoose.js';

class SiteController {
    //router.get('/', siteController.index); | GET
    // index(req, res, next) {
    //     //? chưa hiểu đoạn mã dưới làm gì
    //     Course.find({})
    //         .then((courses) => {
    //             res.render('home', {
    //                 courses: mutipleMongooseToObject(courses),
    //             });
    //         })
    //         .catch(next);
    // }
    async index(req, res, next) {
        try {
            // courses document == property courses obj == mutipleMongooseToObject(courses)
            const courses = await Course.find({}); //Course.find({})?
            res.render('home', { courses: mutipleMongooseToObject(courses) });
        } catch {
            res.status(500).json({
                success: false,
                message: 'Internal Server Error. Please try again later.',
            });
        }
    }

    // show(req, res) {
    //     res.render('search');
    // }
}

//bắt buộc dùng export default instance của class // tại sao có () khi khởi tạo đối tượng
export default new SiteController();

//  Luồng dữ liệu chạy như sau:
//     Course.find({}): Đi vào Database lấy dữ liệu.
