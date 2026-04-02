import Course from '../models/Course.js';
import {
    mongooseToObject,
    mutipleMongooseToObject,
} from '../../util/mongoose.js';

class CourseController {
    // async/await - a promise //router.get('/:slug', courseController.show); //render: show.hbs | Get /source/:slug
    async show(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            res.render('courses/show', { course: mongooseToObject(course) });
        } catch {
            // next(error);
            res.status(500).json({
                success: false,
                message: 'Internal Server Error. Please try again later.',
            });
        }
    }
    //const Course = await Course.findOne({ slug: req.params.slug }); BUG1
    //res.render('courses/show', { course: mongooseToObject(course) }); Gọi file giao diện có tên show.hbs (nằm trong thư mục views/courses/
    // catch(error) {} BUG3 -> lý do browser trả về màn hình trắng , catch nuối log error như black hole BUG3

    // // GET /course/create
    create(req, res, next) {
        res.render('courses/create'); //('courses/create'); path folder absolute direct creat.hbs
    }

    // POST /course/store   // res.json(req.body);
    async store(req, res, next) {
        try {
            const formData = req.body;
            formData.image = `https://img.youtube.com/vi/${req.body.videoId}/hqdefault.jpg`;
            const course = new Course(formData);
            await course.save(formData); // .save after build dataDocument course
            res.redirect('/');
        } catch {
            res.status(500).json({
                success: false,
                message: 'Internal Server Error. Please try again later.',
            });
        }
    }
}

//bắt buộc dùng export default instance của class // tại sao có () khi khởi tạo đối tượng
export default new CourseController();
