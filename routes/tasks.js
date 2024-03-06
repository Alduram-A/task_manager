const ex = require("express");
const router = ex.Router();

const {
  getAllTasks,
  creatTask,
  getAtask,
  updatetask,
  deletetask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks);
router.route("/").post(creatTask);
router.route("/:id").get(getAtask);
router.route("/:id").patch(updatetask);
router.route("/:id").delete(deletetask);

module.exports = router;
