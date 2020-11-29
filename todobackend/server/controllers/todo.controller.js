import todoService from './../services/todo.service';
// This is my controller having all the control methods

//homepage
const index = (request, response) => {
    todoService.search({})
        .then((todos) => {
            response.status(200);
            response.json(todos);
        })
        .catch(handleError(response));
};

// get request
const get = (request, response) => {
    const id = request.params.id;
    todoService.get(id)
        .then((todo) => {
            response.status(200);
            response.json(todo);
        })
        .catch(handleError(response));
};

// post request
const create = (request, response) => {
    const newTodo = Object.assign({}, request.body);
    todoService.create(newTodo)
        .then((todo) => {
            response.status(200);
            response.json(todo);
        })
        .catch(handleError(response));
};

// put request
const update = (request, response) => {
    const id = request.params.id;
    const updateTodo = Object.assign({}, request.body);
    // let currentDate = new Date();
    // updateTodo.lastModifiedDate = currentDate.toLocaleString();
    console.log("Put command executed: object updated in DB");
    todoService.update(id, updateTodo)
        .then((todo) => {
            response.status(200);
            response.json(todo);
        })
        .catch(handleError(response));
};

// delete request

const remove = (request, response) => {
    const id = request.params.id;
    todoService.remove(id)
        .then((todo) => {
            response.status(200);
            response.json({
                message: "Delete Successful"
            });
        })
        .catch(handleError(response));
};

// handling errors
const handleError = (response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}

export default {
    index: index,
    get: get,
    create: create,
    update: update,
    remove: remove
}