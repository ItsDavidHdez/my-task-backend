const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.json({ title: "fjlks" });

usersCtrl.createUser = (req, res) => res.json({ message: "Note Updated" });

usersCtrl.deleteUser = (req, res) => res.json({ message: "Note Updated" });

module.exports = usersCtrl;
