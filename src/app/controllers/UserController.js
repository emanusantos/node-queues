const Mail = require("../lib/Mail");

async function store(req, res) {
  const { name, email, password } = req.body;

  const user = {
    name,
    email,
    password,
  };

  await Mail.sendMail({
    from: "Queue Test <queue@queuetest.com.br>",
    to: `${name} <${email}>`,
    subject: "Cadastro",
    html: `Olá, ${name}, bem-vindo ao sistema de queues =D`,
  });

  return res.json(user);
}

module.exports = { store };
