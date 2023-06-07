class NewController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('API Hello');
    }
}

module.exports = new NewController();
