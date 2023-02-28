import router from "express";
import "./api/v1/";

router.use("./api/v1/");
router.get("/", (req, res, next) => res.send({ ok: true }));

router.use(function (err, req, res, next) {
  if (err.nama === "ValidationError") {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function (errors, key) {
        errors[key] = err.errors[key.message];
        return errors;
      }, {}),
    });
  }
});

module.exports = router;