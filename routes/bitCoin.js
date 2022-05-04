const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/crypto', async (req, res) => {

  const url_api = `someurl`;

  try {
    await fetch(url_api)
      .then(res => res.json())
      .then(data => {
        if (!data) {
          return res.status(404).json({
            status: false,
            message: "no data"
          })
        } else {
          return res.status(200).json({
            status: true,
            data
          })


        }
      });

  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "failed to fetch"
    })
  }

})


module.exports = router;