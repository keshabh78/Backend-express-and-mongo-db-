const express = require("express")
const app =  express()
const mongoose = require('mongoose');
const url ="mongodb+srv://keshabh:1234@cluster0.ynnua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const myschema = require('./studentinfoschema');
mongoose.connect(url).then(()=>console.log("connected to db"))
app.use(express.json())

app.post("/add-new-post",async(req,res)=>{
    const myname= req.body.name;
    const myreg_no=req.body.reg_no;
    const mymarks=req.body.marks;

    try{
      const newinfo = new myschema(
          {
              name:myname,
              reg_no:myreg_no,
              marks:mymarks
          }
      )
      const savedinfo=await newinfo.save()
      res.json(
          {"message":"Student Info is saved","data":savedinfo}
      )
    }
    catch(err){
     res.json(err);
    }
})

app.use("/",(req,res)=>{
    //res.send("Hello World!");
    res.json(
        {"message":"Express server is started"}
    )
})
app.listen(3001,()=>console.log("Express server started"))