const { QueryError, UniqueConstraintError } = require("sequelize");
const Task = require("../models/Task");
const DuplicateError = require("../../../../errors/DuplicateError");

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
      if (error instanceof UniqueConstraintError) {
        throw new DuplicateError("Tarefa já cadastrada");
      } else {
        throw new Error(error);
      }
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
      return task;
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

  async markAllAsComplete(userId) {
    try {
      await Task.update(
        { isComplete: true },
        {
          where: {
            UserId: userId,
          },
        }
      );
    } catch (error) {
      throw new Error(error);
    }
  }
  
}

module.exports = new TaskService();
