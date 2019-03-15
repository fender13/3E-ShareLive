const router = require("express").Router();
const upload = require("../middlewares/upload");
const shareController = require("../controllers/sharingController");

router.post("/upload", upload.single("image"), shareController.uploaded);

router.get("/", shareController.findAllPhoto);
router.put("/update/:id", shareController.updateName);
router.delete("/delete/:id", shareController.delete);

module.exports = router;
