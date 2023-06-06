class NewController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('API Hello');
    }
}

export default new NewController();
