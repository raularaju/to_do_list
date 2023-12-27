const Router = require("express").Router();
const { jwtMiddleware } = require("../../../middlewares/auth");
const httpsStatusCodes = require("../../../utils/constants/httpStatusCodes");
const TaskService = require("../services/TaskService");

Router.post("/", jwtMiddleware, async (req, res, next) => {
  try {
    const task = await TaskService.create(req.body);
    res.status(httpsStatusCodes.ACCEPTED).send(task);
  } catch (error) {
    next(error);
  }
});

Router.put("/:id", jwtMiddleware, async (req, res, next) => {
  try {
    const task = await TaskService.update(req.params.id, req.body);
    res.status(httpsStatusCodes.ACCEPTED).send(task);
  } catch (error) {
    next(error);
  }
});

Router.get("/", jwtMiddleware, async (req, res, next) => {
  try {
    all_tasks = await TaskService.getall();
    res.status(httpsStatusCodes.ACCEPTED).send(all_tasks);
  } catch (error) {
    next(error);
  }
});

Router.get("/:id", jwtMiddleware, async (req, res, next) => {
  try {
    const product = await TaskService.getById(req.params.id);
    res.status(httpsStatusCodes.ACCEPTED).send(product);
  } catch (error) {
    next(error);
  }
});

Router.delete("/:id", async (req, res, next) => {
  try {
    await TaskService.delete(req.params.id);
    res.status(httpsStatusCodes.ACCEPTED).send("Tarefa deletada com sucesso");
  } catch (error) {
    console.log(error)
    next(error);
  }
});

// Router.get('/:name', async (req, res, next) => {
//     try {
//         const name = req.params.name;
//         const productsByName = await TaskService.getByName(name);
//         res.status(httpsStatusCodes.ACCEPTED).send(productsByName);
//     } catch (error) {
//         next(error);
//     }
// })
module.exports = Router;
