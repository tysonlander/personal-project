module.exports = {
  getCowsNotSleeping: (req, res) => {
    const {id} = req.params
    const {ydaDate, sleepFlag} = req.query
    console.log('params', req.params)
    console.log('query', req.query)
    const db = req.app.get('db')
    db.get_cows_sleeping({id, ydaDate, sleepFlag})
      .then((cowsSleeping) => {
        res.status(200).send(cowsSleeping)
      })
      .catch(err => {
        if(err) throw err;
      }) 
  }
}