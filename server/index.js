require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      auth_ctrl = require('./controllers/auth_controllers')
      ranch_ctrl = require('./controllers/ranch_controllers')
      stat_ctrl = require('./controllers/cow_stat_controllers')
const app = express()


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
  app.listen(SERVER_PORT, () => console.log(`cows in the field: ${SERVER_PORT}`))
})

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