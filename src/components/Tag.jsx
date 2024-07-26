import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Tag({ url, selected = false, size = 'small', children }) {
  return (
    <TagContainer selected={selected} size={size}>
      <Link to={url} className="link">#{children}</Link>
    </TagContainer>
  )
}

const TagContainer = styled.div`
  display: inline-block;
  font-size: ${props => {
    switch (props.size) {
      case 'small':
        return '11px'
      case 'medium':
        return '13px'
      case 'large':
        return '16px'
      default:
        return '11px'
    }
  }};
  margin: 2px;

  .link {
    padding: 3px;
    text-decoration: none;
    color: ${props => props.selected ? '#fff' : '#000'};
    background-color: ${props => props.selected ? '#444' : '#eee'};
  }
`