module.exports = {
  getHerdStats: (req, res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.get_herd_stats({id})
      .then((cowStats) => {
        res.status(200).send(cowStats)
      })
      .catch(err => {
        if(err) throw err;
      }) 
  },
  // return how much milk is produced by breed
  getHerdStatsByBreed: (req, res) => {  
    const {id} = req.params
    const db = req.app.get('db')
    db.get_milk_breed({id})
      .then((breedStats) => {
        res.status(200).send(breedStats)
      })
      .catch(err => {
        if(err) throw err;
      })
  }, 
  // get avg herd health for the last 14 days
  getAvgHerdHealth: (req, res) => {  
    const {id} = req.params
    const db = req.app.get('db')
    db.get_herd_healthavg({id})
      .then((avgHerdHealth) => {
        res.status(200).send(avgHerdHealth)
      })
      .catch(err => {
        if(err) throw err;
      })
  }


}