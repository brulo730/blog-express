import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// Định nghĩa khung xương (Schema) cho một Khóa học
const Course = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        level: { type: String, maxLength: 255 },
        videoId: { type: String, require: true },
    },
    {
        timestap: true,
    },
);

// Biên dịch Schema thành Model và xuất ra ngoài
// Tham số đầu tiên 'Course' sẽ tự động được Mongoose chuyển thành chữ thường và thêm 's' (courses) để tạo Collection trong Database
export default mongoose.model('Course', Course);
