const getLogin = (req, res) => {
    res.render('login'); // Render the login page
};

const getSignup = (req, res) => {
    res.render('signup'); // Render the signup page
};

const getMain = (req, res) => {
    res.render('main'); // Render the main page
};

module.exports = {
    getLogin,
    getSignup,
    getMain,
    // other functions as needed...
};
