module.exports = {
  key: "UserReport",
  handle({ data }) {
    const { user } = data;

    console.log("Novo usuário ->", user);
  },
};
