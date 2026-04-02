import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.plugin(slug);

// Định nghĩa khung xương (Schema) cho một Khóa học
const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        level: { type: String, maxLength: 255 },
        videoId: { type: String, required: true },
        slug: { type: String, slug: 'name' },
    },
    {
        timestamps: true,
    },
);
// , để NỐI biểu thức lệnh để chạy LIỀN MẠCH | ; ngược lại dùng để KẾT THÚC CÂU LỆNH
// Biên dịch Schema thành Model và xuất ra ngoài
// Tham số đầu tiên 'Course' sẽ tự động được Mongoose chuyển thành chữ thường và thêm 's' (courses) để tạo Collection trong Database
export default mongoose.model('Course', Course);
