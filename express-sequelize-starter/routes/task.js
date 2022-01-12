const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { check, validationResult } = require("express-validator");

const { Task } = db;
const validateTask = [
    check("name")
      .exists({ checkFalsy: true })
      .withMessage("Task name can't be empty."),
    check("name")
      .isLength({ max: 255 })
      .withMessage("Task name can't be longer than 255 characters."),
  ];

  const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => error.msg);
      const err = Error("Bad request.");
      err.status = 400;
      err.title = "Bad request.";
      err.errors = errors;
      return next(err);
    }
    next();
  };

  const taskNotFoundError = (id) => {
    const err = Error(`Task with id of ${id} could not be found.`);
    err.title = "Task not found.";
    err.status = 404;
    return err;
  };

const asyncAwait = (handler) => (req, res, next) => {
    handler(req, res, next).catch(err);
};

router.get("/", asyncAwait(async (req, res) => {
    const tasks = await Task.findAll();
    res.json({tasks});
}));

router.post('/', validateTask, handleValidationErrors, asyncAwait(async (req, res) => {
    const { name } = req.body;
    const task = await Task.create({ name });
    res.status(201).json({ task });
}));

router.get('/:id(\\d+)', asyncAwait( async (req, res, next) => {
    const taskId = parseInt(res.params.id, 10);
    const task = await Task.findByPk(taskId);
    if (task) {
        res.json({task});
    } else {
        next(taskNotFoundError(taskId));
    }
}));

router.put("/:id(\\d+)", validateTask, handleValidationErrors, asyncHandler(async (req, res, next) => {
      const taskId = parseInt(req.params.id, 10);
      const task = await Task.findByPk(taskId);

      if (task) {
        await task.update({ name: req.body.name });
        res.json({ task });
      } else {
        next(taskNotFoundError(taskId));
      }
    })
  );

  router.delete("/:id(\\d+)", asyncHandler(async (req, res, next) => {
      const taskId = parseInt(req.params.id, 10);
      const task = await Task.findByPk(taskId);

      if (task) {
        await task.destroy();
        res.status(204).end();
      } else {
        next(taskNotFoundError(taskId));
      }
    })
  );

module.exports = router;
