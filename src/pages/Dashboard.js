import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  height: 100vh;
  background: white;
`

const NavigationBar = styled.nav`
  display: flex;
  background: #f7f7f7;
  height: 100vh;
  width: 86px;
  color: #a4a5a7;
  border-right: 1px solid #dfe3e8;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 4px 0px;
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul {
    width: 100%;
  }
`

const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    window.location.hash = ''
    navigate('/')
  }
  return (
    <Container>
      <NavigationBar>
        <ul>
          <button onClick={handleLogout}>
            <span>Logout</span>
          </button>
        </ul>
      </NavigationBar>
    </Container>
  )
}

export { Dashboard }
