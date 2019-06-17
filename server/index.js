require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      http = require('http'),
      auth_ctrl = require('./controllers/auth_controllers'),
      ranch_ctrl = require('./controllers/ranch_controllers'),
      stat_ctrl = require('./controllers/cow_stat_controllers'),
      flag_cows_ctrl = require('./controllers/flag_cows_controllers')
const app = express()
const server = http.createServer(app)


////////////////////////////////////// socket io setup
// const io = require('socket.io')(server) 
// const users = [];
// const connections = [];

// io.sockets.on('connection', function(socket){
//   connections.push(socket);

//   //Disconnect
//   socket.on('disconnect', function(data){
//     connections.splice(connections.indexOf(socket), 1)
//     console.log('Disconnected: %s sockets connected', connections.length);
//   })

//   //Send Message
//   socket.on('send message', function(data){
//     io.sockets.emit('new message', {msg: data}); 
//   })

//   socket.on('error', function(err){
//     console.log(err)
//   });
  
// })
///////////////////////// end of socket io setup

//// start of socket test
const io = require('socket.io')(server) 
const users = [];
const connections = [];

io.sockets.on('connection', function(socket){
  connections.push(socket);

  // set id for user
  socket.emit('welcome', {userID: socket.id})

  //Disconnect
  socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket), 1)
    console.log('Disconnected: %s sockets connected', connections.length);
  })

  //Send Message
  socket.on('message sent', function(data){
    console.log(data)
    data.user = this.id
    io.sockets.emit('new message', data); 
  })

  socket.on('error', function(err){
    console.log(err)
  });
  
})

///// end of socket test 

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  saveUninitialized: false, 
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}))

massive(CONNECTION_STRING).then((database) => {
  app.set('db', database)
  console.log('database set')
  server.listen(SERVER_PORT, () => console.log(`cows in the field: ${SERVER_PORT}`))
})

// auth controls
app.post('/auth/register', auth_ctrl.register)
app.post('/auth/login', auth_ctrl.login)
app.get('/auth/user', auth_ctrl.getUser)
app.get('/auth/logout', auth_ctrl.logout)
app.get('/auth/details', auth_ctrl.getDetails)

app.post('/api/addCow', ranch_ctrl.addCow) // add a cow to an owners herd
app.delete('/api/cow/:cowId', ranch_ctrl.removeCow)
app.post('/api/cows', ranch_ctrl.getAllCows) // get all cows from one owner
app.put('/api/editCow/:cowId', ranch_ctrl.updateCow)

app.get('/api/herdstat/:id', stat_ctrl.getHerdStats)
app.get('/api/herdstatbreed/:id', stat_ctrl.getHerdStatsByBreed) // this gets the milk production grouped by breed and month

// Set & update Health Flags
app.post('/api/addhealthflag', ranch_ctrl.addHealthFlag) // add a health flag
app.put('/api/edithealthflag/:ownerId', ranch_ctrl.updateHealthFlag)
app.post('/api/getHealthFlags', ranch_ctrl.getHealthFlags)

// Get Health Information Herd
app.get('/api/avgHerdHealth/:id', stat_ctrl.getAvgHerdHealth) // this gets the avg Health for the Herd for the last 14 days
app.get('/api/cowsNotSleeping/:id', flag_cows_ctrl.getCowsNotSleeping) // this gets the cows under a certain sleep level

