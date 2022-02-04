module.exports = {
    async home(req, res) {
        const cars = await req.storage.getAll();
        // req.query
        console.log(cars)
        // res.locals.home = cars -> kaDE da SLOJIM KONTESTA
        res.render('catalog', { cars, title: 'Carbicle' });
    }
};

// { cars, title: 'Carbicle', query: req.query }