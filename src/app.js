import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import route from './routes/index.js'; // Phải có .js vì ESM không tự hiểu đuôi file như CommonJS.
// Tạo một thực thể (instance) của app
const app = express();
const PORT = 3000;

const __dirname = import.meta.dirname; //lấy đường dẫn thư mục src

// 1.http logger //Middleware lop trung gian
app.use(morgan('combined')); 

// 2.phân tích dữ liệu body( Form Data & JSON )
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 3.Cấu hỉnh file tĩnh(public folder)
app.use(express.static(path.join(__dirname, 'public')));

// 4.Cấu hình template Engine(Handlebars)
app.engine('hbs', engine({
    extname: '.hbs', // Quan trọng: báo cho engine biết file có đuôi .hbs
    layoutsDir: path.join(__dirname, 'resources/views/layouts'),
    partialsDir: path.join(__dirname, 'resources/views/partials'),
    defaultLayout: 'main', // File layouts/main.handlebars
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); 


// 5.Khởi tạo routes
route(app);

// Lắng nghe kết nốiz
app.listen(PORT, () => {
    console.log(`[SYSTEM] Server đang chạy tại http://localhost:${PORT}/daemon`);
});
