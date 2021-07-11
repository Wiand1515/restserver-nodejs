const { Router } = require("express");
const { userGet, userPut, userPost, userDelete } = require("../controllers/user");


const router = Router();

//Peticion GET
router.get("/", userGet);
//Peticion PUT
router.put("/:id", userPut );
//Peticion POST
router.post("/", userPost );
//Peticion DELETE
router.delete("/", userDelete);

module.exports = router;
