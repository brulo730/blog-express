import mongoose from 'mongoose';

async function connect() {
    try {
        // Thay chuỗi kết nối của bạn vào đây.
        // Hãy nhớ thay <password> bằng mật khẩu thật, và xóa 2 dấu ngoặc < >
        // Bạn có thể thêm /f8_education_dev vào trước dấu ? để đặt tên cho Database
        const URI =
            'mongodb+srv://db_duc_daemon:KYGSWPCboEMKrzgg@cluster0.lynreuo.mongodb.net/?appName=Cluster0';

        await mongoose.connect(URI);
        console.log('[SYSTEM] Kết nối Database thành công!');
    } catch (error) {
        console.error('[SYSTEM] Lỗi kết nối Database:', error);
    }
}

export default { connect };
