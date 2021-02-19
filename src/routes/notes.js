const { Router } = require("express");
const router = Router();

const {
  getNotes,
  newNote,
  getNote,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");
const { getUser, updateUser } = require("../controllers/users.controller");

router.route("/").get(getNotes).post(newNote);

router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);
module.exports = router;
