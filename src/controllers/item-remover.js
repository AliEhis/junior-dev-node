
const remover = function(req, res) {
    const body = req.body;
    const itemToRemove = body.item;

    if (!itemToRemove) {
        return res.status(200).json({
            status: "FAILED",
            code: "02",
            message: "attribute not found"
        });
    }
    
    delete body.data[itemToRemove];
    return res.status(200).json({
        status: "SUCCESS",
        code: "00",
        data: req.body.data
    });
}

module.exports = remover;