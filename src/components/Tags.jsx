import Tag from './Tag'

export default function Tags({ source, selectTag = '' }) {
  return (
    <>
      {
        source
          .split(',')
          .map((tagName, idx) => <Tag 
            key={idx} selected={selectTag === tagName}>
              {tagName}
            </Tag>)
      }
    </>
  )
}
