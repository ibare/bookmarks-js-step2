import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Avatar from './Avatar'

interface NavProps {}

export default function Nav(props: NavProps): React.ReactElement {
  const { name, profileImage } = useSelector((state: { user: { data: { name: string; profileImage: string }}}) => state.user.data)
  const { tag = '' } = useParams()
  const [search, setSearch] = useState<string>(tag ? tag : '')

  useEffect(() => {
    setSearch(tag)
  }, [tag])

  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <NavContainer>
      <Avatar url={profileImage} name={name}/>
      <select>
        <option value="all">Tag</option>
        <option value="all">User</option>
      </select>
      <input type="search" value={search} placeholder="Search" onChange={onChangeSearch} />
      <button>검색</button>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: flex;
  padding: 10px 0;
  gap: 10px;

  select, input, button {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  select {
    flex: 0 0 100px;
  }

  input {
    flex: 1;
  }

  button {
    flex: 0 0 100px;
    background-color: #f0f0f0;
  }
`
