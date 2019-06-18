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
  },
  getCowsLowSteps: (req, res) => {
    const {id} = req.params
    const {ydaDate, stepFlag} = req.query
    console.log('params', req.params)
    console.log('query', req.query)
    const db = req.app.get('db')
    db.get_cows_steps({id, ydaDate, stepFlag})
      .then((cows) => {
        res.status(200).send(cows)
      })
      .catch(err => {
        if(err) throw err;
      }) 
  },
  getCowsGreatStress: (req, res) => {
    const {id} = req.params
    const {ydaDate, stressFlag} = req.query
    console.log('params', req.params)
    console.log('query', req.query)
    const db = req.app.get('db')
    db.get_cows_stress({id, ydaDate, stressFlag})
      .then((cows) => {
        res.status(200).send(cows)
      })
      .catch(err => {
        if(err) throw err;
      }) 
  },
  getCowsHighTemp: (req, res) => {
    const {id} = req.params
    const {ydaDate, tempFlag} = req.query
    console.log('params', req.params)
    console.log('query', req.query)
    const db = req.app.get('db')
    db.get_cows_temp({id, ydaDate, tempFlag})
      .then((cows) => {
        res.status(200).send(cows)
      })
      .catch(err => {
        if(err) throw err;
      }) 
  },
  getCowsLowMilk: (req, res) => {
    const {id} = req.params
    const {ydaDate, milkFlag} = req.query
    console.log('params', req.params)
    console.log('query', req.query)
    const db = req.app.get('db')
    db.get_cows_milk({id, ydaDate, milkFlag})
      .then((cows) => {
        res.status(200).send(cows)
      })
      .catch(err => {
        if(err) throw err;
      }) 
  },
  getOneCowHealth: (req, res) => {
    const {cowId} = req.params
    const db = req.app.get('db')
    db.get_individual_cow_health({cowId})
      .then((cowHealthData) => {
        res.status(200).send(cowHealthData)
      })
      .catch(err => {
        if(err) throw err;
      }) 
  }

}