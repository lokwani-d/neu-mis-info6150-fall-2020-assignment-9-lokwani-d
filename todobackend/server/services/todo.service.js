import Todo from './../models/todo';

// These are my service methods invoked by the controller
const search = (filter) => {
    const promise = Todo.find(filter).exec();
    return promise;
};

const get = (id) => {
    const promise = Todo.findById(id).exec();
    return promise;
}

const create = (newTodo) => {
    const todo = new Todo(newTodo);
    const promise = todo.save();
    return promise;
}

const update = (id, updatedTodo) => {
    const promise = Todo.findByIdAndUpdate(
        { _id: id },
        updatedTodo,
        { new: true }
    ).exec();
    return promise;
}

const remove = (id) => {
    const promise = Todo.remove({ _id: id }).exec();
    return promise;
}

export default {
    search: search,
    get: get,
    create: create,
    update: update,
    remove: remove
}