const express=require('express');
const app= express();
const hbs = require('hbs');
app.set('view engine','hbs');

hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('getUpper',(text) => {
  return text.toUpperCase();
});

hbs.registerHelper( 'date',() => {
  return new Date().getFullYear();
})

app.use((req,res,next) => {
  const log=`${req.url} , ${req.method}`;
  next();
})

app.use((req,res,next) => {
  res.render("main.hbs",{
    name:"akshay"
  });
  console.log('reached main');
  next();
});

app.get('/',(req,res) => {
  res.render("help.hbs",
    {
      name: "akshay",
      age: 21,
      hobby: ["chess", "code", "read"],
      occupation: "coder"
    });
});


app.get('/about',(req,res) => {
  res.render("help.hbs",
    {
      name: "akshay kumar",
      age: 21,
      hobby: ["kumar", "kumar", "kumar"],
      occupation: "kumar"
    });
});

//app.render('home.hbs',)

app.listen(3000, ()=> {
  console.log('listening');
});
