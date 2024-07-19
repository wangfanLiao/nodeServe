import sequelize from "./dbConnect.js";
import models from "./models.js";

sequelize.sync().then(() => {
  console.log("Database and tables have been synchronized.");
});

const getUserList = async () => {
  try {
    const userList = await models.UserList.findAll();

    return userList;
  } catch (error) {
    console.error("Error fetching user list:", error);
  }
};

const getAccount = async () => {
  try {
    const accounts = await models.Account.findAll();

    return accounts;
  } catch (error) {
    console.error("Error fetching accounts:", error);
  }
};

const addOvertime = (data) => {
  models.OvertimeList.create({
    username: data.username,
    startTime: data.startTime,
    endTime: data.endTime,
    overtime: data.overtime,
  })
    .then((overtimeList) => {
      console.log(
        "overtimeList created:",
        overtimeList.get({
          plain: true,
        })
      );
    })
    .catch((err) => {
      console.error("Error creating overtimeList:", err);
    });
};

const getOvertimeList = async (date) => {
  try {
    const overtimeList = await models.OvertimeList.findAll({
      where: {
        username: date,
      },
    });

    return overtimeList;
  } catch (err) {
    console.log(err);
  }
};

const getOvertimeAll = async () => {
  try {
    const list = await models.OvertimeList.findAll();
    return list;
  } catch (error) {
    console.error(error);
  }
};

const deleteOvertime = async (data) => {
  try {
    console.log("start delete");
    await models.OvertimeList.destroy({
      where: { id: data.id },
    });
  } catch (error) {
    console.log(error);
  }
};

const editOvertime = async (data) => {
  try {
    await models.OvertimeList.update(
      {
        username: data.username,
        startTime: data.startTime,
        endTime: data.endTime,
        overtime: data.overtime,
      },
      {
        where: { id: data.id },
      }
    );
    return "success update";
  } catch (error) {
    return error;
  }
};
const operations = {
  getUserList,
  getAccount,
  addOvertime,
  getOvertimeList,
  getOvertimeAll,
  deleteOvertime,
  editOvertime,
};

export default operations;
