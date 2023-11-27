const { Router } = require("express");
const driversRoute = require("./driversRoute");
const teamsRoute = require('./teamsRoute')

const router = Router();
// no estoy usando ninguna ruta en la ruta /
router.use("/drivers", driversRoute);
router.use("/teams", teamsRoute);

module.exports = router;
