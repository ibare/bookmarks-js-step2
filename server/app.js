import fs from 'fs'
import express from 'express'
import morgan from 'morgan'
import delay from './middleware/delay.js'

let bookmarksData

const app = express()
const testProfile = {
  email: 'foo@gmail.com',
  password: '1234',
}

app.use(morgan('dev'))
app.use(delay(500, 2000))
app.use(express.static('dist'))
app.use(express.json())

app.post('/api/login', (req, res) => {
  const { email, password } = req.body

  if (email !== testProfile.email) 
    return res.status(401).send({
      status: 'UNAUTHORIZED',
      message: 'Invalid email'
    })

  if (password !== testProfile.password) 
    return res.status(401).send({
      status: 'UNAUTHORIZED',
      message: 'Invalid password'
    })

  res.status(200).send({
    status: 'OK',
    result: {
      id: 1,
      name: 'Foo',
      email: 'foo@gmail.com',
      profileImage: 'https://ai-avatar-generator.com/samples/sample11.jpg',
    }
  })
})

app.get('/api/bookmarks', (req, res) => {
  res.status(200).send(bookmarksData.map(bookmark => ({
    id: bookmark.id,
    name: bookmark.name,
    url: bookmark.url,
    thumbnail: bookmark.thumbnail,
    tags: bookmark.tags,
    github: bookmark.github,
    npm: bookmark.npm,
  })))
})

app.get('/api/bookmarks/:id', (req, res) => {
  const bookmark = bookmarksData.find(bookmark => bookmark.id === Number(req.params.id, 10))

  if (bookmark) {
    res.status(200).send(bookmark)
  } else {
    res.status(404).send({
      status: 'NOT_FOUND',
      message: `Bookmark with id ${req.params.id} not found`
    })
  }
})

app.get('/api/search/bookmarks/tags/:tag', (req, res) => {
  const tag = req.params.tag.toLocaleLowerCase()
  const searchResult = bookmarksData.filter(bookmark => 
    bookmark.tags
      .split(',')
      .some(t => t.toLowerCase() === tag)
  )

  res.status(200).send(searchResult)
})

fs.readFile('./server/data/bookmarks.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  try {
    bookmarksData = JSON.parse(data)

    app.listen(8080, () => {
      console.log('Server is running on http://localhost:8080')
    })    
  } catch (error) {
    console.error(error)
  }
})
