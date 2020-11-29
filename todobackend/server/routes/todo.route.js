import express from 'express';
import todoController from '../controllers/todo.controller';
// it contains the routes to the various CRUD operations to the controller
const router = express.Router();

/**
 * Search - GET /todo
 * Create - POST /todo
*/
router.route('/todos')
    .get(todoController.index)
    .post(todoController.create);

/**
 * Retrieve - GET /todo/${id}
 * Update - GET /todo/${id}
 * Delete - DELETE /todo/${id}
*/
router.route('/todos/:id')
    .get(todoController.get)
    .put(todoController.update)
    .delete(todoController.remove);

export default router;