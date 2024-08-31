const getOngoings = (req, res) => {
    res.render('admin/ongoing'); // Render ongoing auctions page
};

const getPrevious = (req, res) => {
    res.render('admin/previous'); // Render previous auctions page
};

// Other functions can be simplified similarly...

module.exports = {
    getOngoings,
    getPrevious,
    // other simplified functions...
};
