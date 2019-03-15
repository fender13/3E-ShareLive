const router = require("express").Router();
const upload = require("../middlewares/upload");
const shareController = require("../controllers/sharingController");
const image = require("../helpers/images");

router.post("/upload", image.multer.single("image"), image.sendUploadToGCS, shareController.uploaded);

router.get("/", shareController.findAllPhoto);
router.put("/update/:id", shareController.updateName);
router.delete("/delete/:id", shareController.delete);

module.exports = router;
