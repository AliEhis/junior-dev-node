const validation = function(req, res, next) {
    return res.json({
        status: "SUCCESS",
        code: "00",
        data: req.body
    });
}

module.exports = validation;