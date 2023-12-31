const Router = require("express").Router();
const {
  notLoggedIn,
  jwtMiddleware,
  loginMiddleware,
} = require("../../../middlewares/auth");
const httpStatusCodes = require("../../../utils/constants/httpStatusCodes");
const UserService = require("../services/UserService");
const TaskService = require("../../Task/services/TaskService");
Router.post("/", async (req, res, next) => {
  try {
    await UserService.create(req.body);
    res.status(httpStatusCodes.ACCEPTED).send("Conta criada com sucesso");
  } catch (error) {
    next(error);
  }
});

Router.post("/login", notLoggedIn, loginMiddleware);

Router.post("/logout", jwtMiddleware, async (req, res, next) => {
  try {
    res.clearCookie("jwt");
    res.status(httpStatusCodes.NO_CONTENT).send("Deslogado com sucesso");
  } catch (error) {
    next(error);
  }
});

Router.post("/", async (req, res, next) => {
  try {
    await UserService.create(req.body);
    res.status(httpsStatusCodes.ACCEPTED).send("Usuário criado com sucesso");
  } catch (error) {
    next(error);
  }
});

Router.get("/:id/tasks", async (req, res, next) => {
  try {
    const tasks = await UserService.getTasks(req.params.id);
    res.status(httpStatusCodes.ACCEPTED).send(tasks);
  } catch (error) {
    next(error);
  }
});

Router.put("/:id/tasks", async (req, res, next) => {
  try {
    await TaskService.markAllAsComplete(req.params.id);
    res.status(httpStatusCodes.ACCEPTED).send("Tarefas marcadas como concluídas");
  } catch (error) {
    next(error);
  }
});

module.exports = Router;
