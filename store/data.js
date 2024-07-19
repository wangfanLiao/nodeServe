const users = [{ username: "wly", password: "123456" }];
const menuDate = [
  {
    id: "125",
    order: "1",
    path: "users",
    authName: "用户管理",

    children: [
      {
        id: "110",
        authName: "用户列表",
        path: "users",
        children: [],
        order: null,
      },
    ],
  },
  {
    id: "103",
    order: "2",
    path: "overtimeList",
    authName: "加班记录",

    children: [
      {
        id: "110",
        authName: "新增加班",
        path: "addOvertime",
        children: [],
        order: null,
      },
      {
        id: "110",
        authName: "加班记录",
        path: "overtimeList",
        children: [],
        order: null,
      },
    ],
  },
];

const data = {
  users,
  menuDate,
};
export default data;
