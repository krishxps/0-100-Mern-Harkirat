const zod = require('zod');
// {
//     "title": "string",
//     "description": "string",
//     "completed": "boolean"
// }
// {
//     id : string
// }

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string(),
})

const updateTodo = zod.object({
    id : zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}