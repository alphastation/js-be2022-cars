module.exports = {
    notFound(req, res) {
        // const cars = await req.storage.getAll(req.query);

        res.render('404');
    }
};