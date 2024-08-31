const express = require('express')
// const { getMain, getAuctions, getSell, getLogin, getContact, getSignup, signup, login, logout, subscribe, sell, getBidPage, bid } = require('../controllers/user')
// const { isLoggedin, loginTest } = require('../middlewares/user')
const router = express.Router()

router
    .route('/')
    .get((req, res) => {
        // Example data to pass to the template
        const items = [
            { photo: 'item1.jpg', bids: [], name: 'Item 1' },
            { photo: 'item2.jpg', bids: [], name: 'Item 2' },
            { photo: 'item3.jpg', bids: [], name: 'Item 3' },
            { photo: 'item4.jpg', bids: [], name: 'Item 4' }
        ];
        const sub = 'Your subscription is active.';  // Placeholder message

        res.render('main', { title: 'Home Page', items: items, sub: sub });
    });

router
    .route('/auctions')
    .get((req, res) => res.render('auctions'));

router
    .route('/sell')
    .get((req, res) => res.render('sell'));

router
    .route('/login')
    .get((req, res) => res.render('login', { msg: '', islogin: false }));

router
    .route('/signup')
    .get((req, res) => {
        console.log("Rendering signup page");
        res.render('signup',{ layout: false });
    });    

router
    .route('/contact')
    .get((req, res) => res.render('contact'));
// router
//     .route('/')
//     .get(loginTest,getMain)


// router
//     .route('/auctions')
//     .get(loginTest,getAuctions)

// router
//     .route('/sell')
//     .get(isLoggedin,loginTest,getSell)
//     .post(isLoggedin,sell)

// router
//     .route('/login')
//     .get(loginTest,getLogin)
//     .post(login)

// // router
// //     .route('/signup')
// //     .get(loginTest,getSignup)
// //     .post(signup)

// router
//     .route('/contact')
//     .get(loginTest,getContact)

// // router
// //     .route('/logout')
// //     .get(logout)

// // router
// //     .route('/subscribe')
// //     .post(subscribe)

// // router
// //     .route('/bid/:id')
// //     .get(isLoggedin,loginTest,getBidPage)

// // router
// //     .route('/bid')
// //     .post(isLoggedin,bid)

module.exports = router