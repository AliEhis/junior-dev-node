const express = require("express");
const router = express.Router();

const validationMiddleware = require("./utilities/validation-middleware");
const validationCtrl = require("./controllers/validation");
const removerCtrl = require("./controllers/item-remover");

router.get("/", (req, res, next) => {
    return res.json({
        appStatus: "Running fine"
    });
})

router.post("/validation",
    (req, res, next) => validationMiddleware.validate(req, res, next, validationMiddleware.validationRule),
    (req, res, next) => validationCtrl(req, res, next, validationMiddleware.validationRule)
);

router.post("/remove",
    (req, res, next) => validationMiddleware.validate(req, res, next, validationMiddleware.removeValidationRule),
    (req, res, next) => removerCtrl(req, res, next)
);


module.exports = router;