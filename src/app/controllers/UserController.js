const Queue = require("../lib/Queue");

async function store(req, res) {
  const { name, email, password } = req.body;

  const user = {
    name,
    email,
    password,
  };

  await Queue.add("RegistrationMail", { user });

  await Queue.add("UserReport", { user });

  return res.json(user);
}

module.exports = { store };
