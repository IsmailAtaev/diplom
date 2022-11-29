const tours = [
    {
        country: 'USA',
        city: 'NYC',
        type: 'excursion',
        duration: 12,
        price: 170,
    },
    {
        country: 'Japan',
        city: 'Tokyo',
        type: 'excursion',
        date: '11.12.2022',
        duration: 5,
        price: 543,
    },
    {
        country: 'Russia',
        city: 'Moscow',
        type: 'excursion',
        date: '9.5.2021',
        duration: 3,
        price: 380,
    },
]


class TourController {

    async getTours(req, res) {
        try {
            res.json(tours);
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new TourController();