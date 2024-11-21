import React from 'react'
import styled from 'styled-components'
import {
  useSpotifyContext,
  useGetUserProfileData,
} from '@hooks/SpotifyProvider'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@common/Icon'

const Button = styled.button`
  background: transparent;
  border: none;
  display: flex;
  margin-top: auto;
  padding: 0 20px 0 0;
`

const NavigationBar = styled.nav`
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  max-height: 100%;
  width: 260px;
  color: #a4a5a7;
  border-right: 1px solid #dfe3e8;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 4px 0px;
  padding: 20px;

  div.header {
    flex: 1;
    h2 {
      padding: 0;
      margin: 0;
    }
  }
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul {
    width: 100%;
    display: flex;
  }
`

const Navigation = () => {
  const navigate = useNavigate()
  const { userName, isAuthenticated, accessToken } = useSpotifyContext()

  const handleLogout = () => {
    window.location.hash = ''
    navigate('/')
  }
  return (
    <NavigationBar>
      <div className="header" style={{ width: '100%' }}>
        <h2 style={{ fontWeight: '300' }}>MUSIC-FY</h2>
      </div>
      <div className="profile-image-container">
        {userName ? userName : 'user-name'}
      </div>
      <ul>
        <Button className="logout" onClick={handleLogout}>
          <Icon name="SIGNOUT" size={30} />
        </Button>
      </ul>
    </NavigationBar>
  )
}

export { Navigation }
