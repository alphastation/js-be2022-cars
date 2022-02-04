
module.exports = {
    async details(req, res) {
        const id = req.params.id;
        const car = await req.storage.getById(id);
        if (car) {
            console.log(`cenaIMAME- ${car.price}`)
            res.render('details', { title: `Carbicle - ${car.name}`, car })
        } else {
            res.render('/404')
        }


    }
};