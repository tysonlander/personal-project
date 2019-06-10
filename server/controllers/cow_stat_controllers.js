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
  }
}