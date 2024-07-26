const makeError = (req, res, next) => {
  const random = Math.random()

  if (random < 0.05) {
    return res.status(500).send('500 Internal Server Error')
  } else if (random < 0.10) {
    return res.status(400).send('400 Bad Request')
  }

  next()
}

export default makeError
