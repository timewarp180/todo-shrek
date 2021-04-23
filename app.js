const express = require("express"),
      app = express(),
      session = require("express-session"),
      http = require("http"),
      server = http.createServer(app),
      bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));      

const   accountRoutes = require('./routes/accountRoutes'),
        taskRoutes = require('./routes/taskRoutes');

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: "secreto-key",
    resave: false,
    saveUninitialized: false    
}));

app.get("/", (req,res) => {
    res.render("index");
})

app.get("/logout", (req,res) => {
    req.session.destroy();
    res.redirect('/');
})

// Account Routes
app.use("/account", accountRoutes);
//Task Routes
app.use("/task", taskRoutes);

server.listen(8080, () => console.log("8080 is open"))