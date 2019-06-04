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
  }
}