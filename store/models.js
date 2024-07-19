import { DataTypes, Model } from "sequelize";
import sequelize from "./dbConnect.js";

class Account extends Model {}
class UserList extends Model {}
class OvertimeList extends Model {}

Account.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // 传递 Sequelize 实例
    modelName: "Account",
    tableName: "account", // 表名
    timestamps: false,
  }
);

UserList.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    create_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mg_state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize, // 传递 Sequelize 实例
    modelName: "UserList",
    tableName: "userlist", // 表名
    timestamps: false,
  }
);

OvertimeList.init(
  {
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
      field: "start_time",
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false,
      field: "end_time",
    },
    overtime: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createTime: {
      type: DataTypes.TIME,
      allowNull: true,
      field: "create_time",
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, // 传递 Sequelize 实例
    modelName: "OvertimeList",
    tableName: "overtime_list", // 表名
    timestamps: false,
  }
);

const models = { Account, UserList, OvertimeList };
export default models;
