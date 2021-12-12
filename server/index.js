require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const questionsRoutes = require('./routes/QuestionsRoutes')
const usersRoutes = require('./routes/UsersRoutes')


const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use("/api/questions", questionsRoutes)
app.use("/api/users", usersRoutes)

app.listen(PORT, () => {
    console.log("server is running in port 3001");
  });