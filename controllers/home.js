module.exports = {
    async home(req, res) {
        console.log(req.query)
        const cars = await req.storage.getAll(req.query);

        console.log(cars)
        // res.locals.home = cars -> kaDE da SLOJIM KONTESTA
        res.render('catalog', { cars, title: 'Carbicle', query: req.query });
    }
};

