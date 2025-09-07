const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");
const { protect } = require("../middleware/auth.middleware");
const upload = require("../utils/multer"); 

const router = express.Router();

// GET /tasks → Get all tasks for logged-in user
router.get("/", protect, getTasks);

// POST /tasks → Create task with optional files
router.post("/", protect, upload.array("attachments", 5), createTask);

// GET /tasks/:id → Get a single task by ID
router.get("/:id", protect, getTaskById);

// PUT /tasks/:id → Update a task by ID
router.put("/:id", protect, updateTask);

// DELETE /tasks/:id → Delete a task by ID
router.delete("/:id", protect, deleteTask);

module.exports = router;
