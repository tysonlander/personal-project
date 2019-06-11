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
  }
}