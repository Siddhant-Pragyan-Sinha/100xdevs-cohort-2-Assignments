const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456789";

const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "rjha9277@gmail.com",
      password: "123456789",
      name: "Ranjana Jha",
  },
      {
        username: "rjha277@gmail.com",
          password: "12345678",
          name: "Madhav Jha",
      },
      {
        username: "rjha77@gmail.com",
          password: "1234567",
          name: "Raghav Jha",
      },
      
];

function userExists (username, password){
  let userExists = false;
  for(let i=0; i<ALL_USERS.length; i++){
    if(ALL_USERS[i].username == username && ALL_USER[i].password == password){
      userExists =true;
    }
  }
  return userExists;
}

app.post("/signin", function(ewq, res){
  const username = req.body.username;
  const password = requestAnimationFrame.body.password;

  if(!userExists(username, password)){
    return res.status(403).json({
      msg: "Username doesn't exists in our memeory db",
    });
  }

  var token = jwt.sign({username: username}, "abcderrr");
  return res.json({
    token,
  });
});


app.get("/users", function(req, res){
  const token = req.headers.authorization;
  try{
    const decoded = jwt.verify(token, jwtPassword);
    const usernmae = decoded.username;
  }
  catch(err){
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)
