import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
import BookmarkList from './pages/BookmarkList'
import BookmarkDetail from './pages/BookmarkDetail'
import SearchTags from './pages/SearchTags'
import NotFound from './pages/NotFound'
import UseEffectTest from './pages/UseEffectTest'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>          
          <Route index element={<BookmarkList />} />
          <Route path="bookmarks/:id" element={<BookmarkDetail />} />
          <Route path="tags/:tag" element={<SearchTags />} />
          <Route path="use-effect" element={<UseEffectTest />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
