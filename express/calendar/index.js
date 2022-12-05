
// id client: 769430780323-5nqndpbel3iu62cdjqcj45p8t8pssprf.apps.googleusercontent.com
// secret  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
const axios = require('axios')

const createEvent = (req, res) => {
  console.log({ req })
  axios.get('https://eo6bf1fgja8meug.m.pipedream.net/', {
    params: {
      name: "toto",
      description: "mon evenment",
      start: "2022-12-14T09:00:00-07:00",
      end: "2022-12-14T09:00:00-07:00"
    }

  })

  return res.json('ok')
}

module.exports = { createEvent };
