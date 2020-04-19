module.exports = function server() {
  const express = require('express');
  const app = express()

  app.listen(4040, () => {
    console.log("server running from my server file")
  })
}