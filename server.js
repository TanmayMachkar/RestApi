const express = require('express');
const studentRoutes = require('./src/student/routes');

const app = express();
const port = 3000;

app.use(express.json()); //allows to post and use json

app.get("/", (req, res) => {
	res.send("Hello machkar");
})

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => 
	console.log(`App listening on port ${port}`)
);


//get id: in params
//post info: in body in form of json