module.exports = {
  addCow: (req, res) => {
    const {ownerId, rfid, breed, gender, purchasePrice, location} = req.body
    const db = req.app.get('db')
    db.add_cow({ownerId, rfid, breed, gender, purchasePrice, location})
      .then(dbResponse => {
        res.status(200).send(dbResponse);
      })
      .catch(error => {
        if(error) throw error;
      })
  },
  removeCow: (req, res) => {
    const db = req.app.get('db')
    const {cowId} = req.params;
    db.remove_cow({cowId})
      .then(() => {
        res.sendStatus(200)
      })
      .catch(error => {
        if(error) throw error;
      })
  }, 
  getAllCows: (req, res) => {
    const {id} = req.body
    const db = req.app.get('db')
    db.get_cows({id})
      .then((cows) => { // the id here is the ranch owner id
      res.status(200).send(cows)
    })
    .catch(error => {
      if(error) throw error;
    })
  },
  updateCow: (req, res) => {
    const {cowId} = req.params;
    const {rfid, breed, gender, purchasePrice, location} = req.body
    const db = req.app.get('db')
    db.edit_cow({rfid, breed, gender, purchasePrice, cowId, location})
      .then(dbResponse => {
        res.status(200).send(dbResponse);
      })
      .catch(error => {
        if(error) throw error
      })
  },
  addHealthFlag: (req, res) => {
    const {ownerId, sleep, steps, stress, temp, milk} = req.body
    const db = req.app.get('db')
    db.add_health_flag({ownerId, sleep, steps, stress, temp, milk})
      .then(dbResponse => {
        res.status(200).send(dbResponse);
      })
      .catch(error => {
        if(error) throw error;
      })
  },
  updateHealthFlag: (req, res) => {
    const {ownerId} = req.params;
    const {sleep, steps, stress, temp, milk} = req.body
    const db = req.app.get('db')
    db.edit_health_flag({ownerId, sleep, steps, stress, temp, milk})
      .then(dbResponse => {
        res.status(200).send(dbResponse);
      })
      .catch(error => {
        if(error) throw error
      })
  }
}