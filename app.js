// 1. Import module
const express = require('express');

// 2. Khởi tạo Application Instance
const app = express();
const PORT = 3000;

// 3. Định tuyến cơ bản (Basic Route)
app.get('/daemon', (req, res) => {
    // req (Request): Gói hàng chứa yêu cầu của người dùng gửi lên
    // res (Response): Kênh để bạn gửi dữ liệu trả về
    res.send('Hệ thống backend đã khởi chạy thành công!');
});

// 4. Lắng nghe kết nối
app.listen(PORT, () => {
    console.log(`[SYSTEM] Server đang chạy tại http://localhost:${PORT}`);
});
