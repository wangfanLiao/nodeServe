import express, { json } from "express";
const app = express();
const port = 3000;
import cors from "cors";
import generateToken from "./token/token.js";
import data from "./store/data.js";
import operations from "./store/getDate.js";

app.use(json());
app.use(cors());

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const users = await operations.getAccount();
  const check = users.find(
    (element) => element.username === username && element.password === password
  );

  if (check) {
    const payload = {
      usernameJWT: username,
      passwordJWT: password,
    };
    const token = generateToken(payload);
    res.status(200).json({
      username: username,
      password: password,
      data: {
        id: 500,
        rid: 0,
        username: username,
        token: token,
      },
      meta: {
        message: "success login",
        status: 200,
      },
    });
  } else {
    res.status(401).json({ message: "forbeddent" });
  }
});

app.get("/menu", (req, res) => {
  res.status(200).json({
    message: "get menu",
    data: data.menuDate,
    meta: {
      msg: "获取菜单列表成功",
      status: 200,
    },
  });
});

app.get("/users", async (req, res) => {
  const userList = await operations.getUserList();
  res.status(200).json({
    message: "get user list ",
    data: userList,
    meta: {
      message: "success user list",
      status: 200,
    },
  });
});

app.post("/addOt", (req, res) => {
  operations.addOvertime(req.body);
  res.status(200).json({
    meta: {
      message: "新增加班记录成功！",
      status: 200,
    },
  });
});

app.post("/otList", async (req, res) => {
  const userOvertimeList = await operations.getOvertimeList(req.body.username);

  res.status(200).json({
    data: userOvertimeList,
    meta: {
      status: 200,
      message: "success getOvertimeList",
    },
  });
});

app.get("/otAll", async (req, res) => {
  const list = await operations.getOvertimeAll();
  res.status(200).json({
    data: list,
    meta: {
      status: 200,
      message: "success getAllOvertimeList",
    },
  });
});

app.post("/delete", async (req, res) => {
  const id = req.body;
  console.log(id);
  await operations.deleteOvertime(id);
  res.status(200).json({
    meta: {
      message: "delete success",
      status: 200,
    },
  });
});

app.post("/edit", async (req, res) => {
  const editRes = operations.editOvertime(req.body);
  res.status(200).json({
    meta: {
      message: "update success",
      status: 200,
    },
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running at port ${port}`);
});
