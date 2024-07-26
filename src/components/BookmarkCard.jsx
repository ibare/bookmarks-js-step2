import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Tags from './Tags'

export default function BookmarkCard({ id, name, thumbnail, tags }) {
  return (
    <Card>
      <Thumbnail image={thumbnail} />
      <p className="title">{name}</p>
      <Tags source={tags} />
      <Link to={`/bookmarks/${id}`} className="more">...more</Link>
    </Card>
  )
}

const Card = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .title {
    font-size: 14px;
    font-weight: 700;
  }

  .more {
    font-size: 11px;
    color: #666;
    margin-left: 1em;
  }
`

const Thumbnail = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  position: relative;
  border: 1px solid #eee;
  border-radius: 16px;

  &:before {
    content: "";
    background-image: url(${props => props.image});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
  }

  &:hover:before {
    transform: scale(1.1); /* 줌인 효과 */
  }
`;

