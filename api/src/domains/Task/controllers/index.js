const Router = require("express").Router();
const httpsStatusCodes = require("../../../utils/constants/httpStatusCodes");
const Task = require("../models/Task");
const TaskService = require("../services/index");


Router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const product = await TaskService.create(req.body);
    res.status(httpsStatusCodes.ACCEPTED).send(product);
  } catch (error) {
    next(error);
  }
});

Router.put("/:id", async (req, res, next) => {
  try {
    await TaskService.update(req.params.id, req.body);
    res.status(httpsStatusCodes.ACCEPTED).send("Tarefa atualizada com sucesso");
  } catch (error) {
    next(error);
  }
});

Router.get("/", async (req, res, next) => {
  try {
    all_products = await TaskService.getall();
    res.status(httpsStatusCodes.ACCEPTED).send(all_products);
  } catch (error) {
    next(error);
  }
});

Router.get("/:id", async (req, res, next) => {
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
