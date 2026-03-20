import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Định nghĩa khung xương (Schema) cho một Khóa học
const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Biên dịch Schema thành Model và xuất ra ngoài
// Tham số đầu tiên 'Course' sẽ tự động được Mongoose chuyển thành chữ thường và thêm 's' (courses) để tạo Collection trong Database
export default mongoose.model('Course', Course);
