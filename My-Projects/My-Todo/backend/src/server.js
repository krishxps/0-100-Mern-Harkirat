const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes');
const {bammm} = require('../../../../database')

const app = express();
const PORT = process.env.PORT || 5001;

mongoose.connect(bammm);

app.use(express.json());
app.use('/',(req, res) => res.send('Server is running'));
app.use('/api', userRoutes);
app.use('/api', todoRoutes);

app.listen(PORT, () => console.log(`Server running on port http:://localhost:${PORT}`));
