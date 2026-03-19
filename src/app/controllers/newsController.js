class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }
    //[GET] /news/:slug (chi tiết tin tức)
    show(req, res){
        res.send('Trang chi tiết tin tức');
    }

}

//bắt buộc dùng export default instance của class // tại sao có () khi khởi tạo đối tượng
export default new NewsController();









