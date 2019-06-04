const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const { firstName, lastName, ranch, email, password } = req.body
    const db = req.app.get('db')
    const { session } = req
    const userFound = await db.check_user_email({email})
    if (userFound[0]) return res.status(409).send('There is already an account associated with this email address.')
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const createdUser = await db.register_user({
      firstName,
      lastName,
      ranch,
      email,
      password: hash
    })
    session.user = {id: createdUser[0].id, userFirst: createdUser[0].first_name}
    res.status(200).send(session.user)
  },
  login: async (req, res) => {
    const {email, password} = req.body
    const db = req.app.get('db')
    const  { session } = req
    const userFound = await db.check_user_email({email})
    if(!userFound[0]) return res.status(401).send('That user does not exist')
    const authenticated = bcrypt.compareSync(password, userFound[0].password)
    if(authenticated){
      session.user = {id: userFound[0].id, firstName:userFound[0].first_name }
      res.status(200).send(session.user)
    } else{
      return res.status(401).send('Whoa there cowboy! Please try a different email or password')
    }
  },
  getUser: (req, res) => {
    const {session} = req
    if (session.user){
      return res.status(200).send(session.user)
    }
  },
  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  },
  getDetails: async (req, res) => {
    const db = req.app.get('db')
    const {session} = req
    if (session.user) {
      const details = await db.get_user_details({id: session.user.id })
      const {ranch} = details[0]
      return res.status(200).send({
        ranch: ranch
      })
    }
    return res.status(401).send('Please login')
  }
}