class DaemonController {

    daemon(req, res) {
        res.send('Daemon');
    }

}

//bắt buộc dùng export default instance của class // tại sao có () khi khởi tạo đối tượng
export default new DaemonController();









