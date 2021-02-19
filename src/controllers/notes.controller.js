const notesCtrl = {};

const { Note } = require("../models");

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesCtrl.newNote = async (req, res) => {
  const { title, description, date, author } = req.body;
  const newNote = new Note({
    title,
    description,
    author,
    date,
  });
  await newNote.save();
  res.json({ message: "Note saved" });
};

notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

notesCtrl.updateNote = async (req, res) => {
  const { title, description, author } = req.body;
  await Note.findOneAndUpdate(req.params.id, {
    title,
    description,
    author,
  });
  res.json({ message: "Note updated" });
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
};

module.exports = notesCtrl;
