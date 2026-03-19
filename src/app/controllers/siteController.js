class SiteController {
    // [GET] /news
    index(req, res) {
        res.render('home');
    }
    //[GET] /news/:slug (chi tiết tin tức)
    show(req, res) {
        res.render('search');
    }

}

//bắt buộc dùng export default instance của class // tại sao có () khi khởi tạo đối tượng
export default new SiteController();









