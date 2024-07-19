import { Sequelize } from "sequelize";

console.log("start conn");
const sequelize = new Sequelize("vuemanagement", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

export default sequelize;
