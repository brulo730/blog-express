import newsRouter from './news.js';
import siteRouter from './site.js';
import daemonRouter from './daemon.js';

function route(app){
    // Khi request bắt đầu bằng '/news', hãy giao cho news router xử lý 
    app.use('/news', newsRouter);
    app.use('/daemon', daemonRouter)
    app.use('/', siteRouter);
    // Các tuyến đường chung khác chưa cần tách Router vội
    // app.get('/daemon', (req, res) => {
    //     res.render('news');
    // });

    //     app.get('/search', (req, res) => {
    //     console.log(req.query);
    //     res.render('search');
    // });

    //     app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send(req.body);
    // });
}
export default route;