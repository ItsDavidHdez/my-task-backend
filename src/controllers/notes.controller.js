const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({ message: [] });

notesCtrl.newNote = (req, res) => res.json({ message: "Post Request" });

notesCtrl.getNote = (req, res) => res.json({ title: "fjlks" });

notesCtrl.updateNote = (req, res) => res.json({ message: "Note Updated" });

notesCtrl.deleteNote = (req, res) => res.json({ message: "Note Deleted" });

module.exports = notesCtrl;
