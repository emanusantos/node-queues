const Mail = require("../lib/Mail");

module.exports = {
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Queue Test <queue@queuetest.com.br>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro",
      html: `Olá, ${user.name}, bem-vindo ao sistema de queues =D`,
    });
  },
};
