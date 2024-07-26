import { useParams } from 'react-router-dom'
import { useSearchTags } from '../hooks/useBookmarks'
import styled from 'styled-components'
import BookmarkCard from '../components/BookmarkCard'

export default function SearchTags() {
  const { tag } = useParams()
  const { bookmarks, loading, error } = useSearchTags(tag)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <Wrapper>
      {bookmarks.map(({ id, name, thumbnail, tags }, idx) => 
        <BookmarkCard key={idx}
          id={id}
          name={name} 
          thumbnail={thumbnail} 
          tags={tags} 
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`
