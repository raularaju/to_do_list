const { QueryError } = require("sequelize");
const Task = require("../models/Task");

class TaskService {
  async getById(id) {
    const task = await Task.findByPk(id);
    if (task) {
      return task;
    } else {
      throw new QueryError("Tarefa não encontrada");
    }
  }

  async create(body) {
    try {
      return await Task.create(body);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getall() {
    const tasks = await Task.findAll();
    return tasks;
  }

  async update(id, body) {
    const task = await Task.findByPk(id);
    if (task) {
      task.set(body);
      await task.save();
    } else {
      throw new QueryError("Tarefa não encontrada");
    }
  }

  async delete(id) {
    const task = await this.getById(id);
    if (task) {
      await task.destroy();
    } else {
      throw new QueryError("Tarefa não encontrada");
    }
  }
}

module.exports = new TaskService();
