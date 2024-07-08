const zod = require('zod');

const todoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
});

const userSchema = zod.object({
    name: zod.string(),
    username: zod.string(),
    password: zod.string(),
});

module.exports = {
    todoSchema,
    userSchema
}