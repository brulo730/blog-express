import Course from '../models/Course.js';
import {
    mongooseToObject,
    mutipleMongooseToObject,
} from '../../util/mongoose.js';

class CourseController {
    // Using promise chaining
    show(req, res, next) {
        // 1. Sửa thành req.params
        // 2. Xóa dấu ; sau hàm findOne để chuỗi Promise không bị ngắt
        // Get /source/:slug
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    // async show(req, res, next) {

    //         const Course = await Course.findOne({slug: req.params.slug,})
    // }

    // // GET /course/create
    create(req, res, next) {
        res.render('courses/create');
    }
    // POST /course/store
    async store(req, res, next) {
        // res.json(req.body);
        const course = new Course(req.body);
        await course.save();
        res.send('Đã lưu vào database mongodb atlas');
        console.error('Database save Error ', error);
        // next(error);
        res.status(500).send(
            'Internal Server error : Could not save the course',
        );
    }
}

//bắt buộc dùng export default instance của class // tại sao có () khi khởi tạo đối tượng
export default new CourseController();
