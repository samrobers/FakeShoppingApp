const { User } = require("../Models");

const userData = [
  {
    username: "Sam",
  },
  {
    password: "secret",
  },
  {
    email: "sam@gmail",
  },
];

const seedUsers = () => {
  User.bulkCreate(userData);
};

module.exports = seedUsers;
