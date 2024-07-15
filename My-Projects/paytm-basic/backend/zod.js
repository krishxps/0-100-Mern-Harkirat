// --------------------------------------------------------------------------------
// Library Imports
// --------------------------------------------------------------------------------
const z = require('zod');

// --------------------------------------------------------------------------------
// User Schema Validation
// --------------------------------------------------------------------------------
const userSchema = z.object({
    username: z.string().min(3).max(30),
    password: z.string().min(6),
    firstName: z.string().max(50),
    lastName: z.string().max(50)
});

const userLogin = z.object({
    username: z.string().min(3).max(30),
    password: z.string().min(6)
})

const updateBody = z.object({
	password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
})

// --------------------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------------------
module.exports = {
    userSchema,
    userLogin,
    updateBody
}