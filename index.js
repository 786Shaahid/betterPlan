import  express  from "express";
import path from "path";
import  ejs from 'ejs'; 
import  env  from "dotenv";
const port=8050;
const app=express();
env.config();

app.set('view engine','ejs');
app.set('views',path.join(path.resolve(),'src','views'));

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(express.static('./assests'))



app.get('/',(req,res)=>{
     return res.render('registration');
})
app.get('/login',(req,res)=>{
     return res.render('login');
})
app.get('/plans',(req,res)=>{
     return res.render('planDetails');
})
app.get('/payment',(req,res)=>{
     return res.render('payment');
})

app.listen(port,(err)=>{
       if(err) {
        console.log(`Server is not running on the port :${port} `); 
    }
    console.log(`Server is running successfully on port :${port}`);
})