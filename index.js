const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.get("/add", (req, res, next) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result={
        operation:"add",
        value1:num1,
        value2:num2,
        result:num1+num2,
    };

    res.json(result);
   });

 
app.get("/sub", (req, res, next) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result={
        operation:"subtraction",
        value1:num1,
        value2:num2,
        result:num1-num2,
    };

    res.json(result);
   });
   

app.get("/mul", (req, res, next) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result={
        operation:"multiplication",
        value1:num1,
        value2:num2,
        result:num1*num2,
    };

    res.json(result);
   });   

 
app.get("/div", (req, res, next) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const result={
        operation:"division",
        value1:num1,
        value2:num2,
        result:num1/num2,
    };

    res.json(result);
   });  
   
app.post("/exec-add",(req,res)=>{
    console.log(req);
    const reqPayload = req.body;
    console.log(reqPayload);
    const values = reqPayload.values;
    let result=0;

    values.forEach(element => {
        result+=element;
    });

    const responsePayload={
        operation:"addition",
        values:values,
        result:result,
    };

    res.json(responsePayload);

});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
