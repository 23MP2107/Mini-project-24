const express = require('express')
// const { isLoggedin, loginTest } = require('../middlewares/user')
// const { getSells, getSubscriptions, getAdd, addItem, getOngoings, getPrevious, viewItem, changeActive } = require('../controllers/admin')
const router = express.Router(); // Define the router

// router
//     .route('/login')
//     .get((req,res)=>{
//         res.render('admin/login')
//     })

// router
//     .route('/')
//     .get((req,res)=>{
//         res.redirect('/admin/ongoing')
//     })

// router
//     .route('/sell-requests')
//     .get(getSells)

// router
//     .route('/subscriptions')
//     .get(getSubscriptions)

// router
//     .route('/add')
//     .get(getAdd)
//     .post(addItem)

// router
//     .route('/ongoing')
//     .get(getOngoings)

// router
//     .route('/previous')
//     .get(getPrevious)

// router
//     .route('/view/:id')
//     .get(viewItem)

// router
//     .route('/delete/:id')
//     .get(changeActive)

router.get('/ongoing', (req, res) => {

    const items = [
        { photo: '/images/Featured-items/1.png', bids: [], name: 'Item 1' },
        { photo: '/images/Featured-items/2.png', bids: [{}, {}], name: 'Item 2' },
        // Add more items as needed
    ];
    res.render('admin/ongoing', { title: 'Ongoing Items',items: items });
});

router.get('/add', (req, res) => {
    res.render('admin/add', { title: 'Add Item' });
});

router.get('/previous', (req, res) => {
    const items = [
        { photo: '/images/Featured-items/1.png', bids: [], name: 'Item 1' },
        { photo: '/images/Featured-items/2.png', bids: [{}, {}], name: 'Item 2' },
        // Add more items as needed
    ];
    console.log(items);  // Log the items to the console
    res.render('admin/previous', { items: items }, { title: 'Previous Items' });
});

router.get('/subscriptions', (req, res) => {
    res.render('admin/subscriptions', { title: 'Subscriptions' });
});

router.get('/sell-requests', (req, res) => {
    res.render('admin/sell-requests', { title: 'Sell Requests' });
});
module.exports = router