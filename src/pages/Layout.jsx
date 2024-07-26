
import styled from 'styled-components'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Nav from '../components/Nav'

export default function Layout() {
  const userStatus = useSelector((state) => state.user.status)


  if (userStatus !== 'succeeded') {
    return (
      <Navigate to={{ pathname: "/login", state: { from: location } }} />
    )
  }

  return (    
    <Wrapper>
      <Nav />
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Content = styled.div`
  margin-top: 20px;
`
