import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import {
  useSpotifyContext,
  useGetUserProfileData,
} from '@hooks/SpotifyProvider'

import { NewReleases } from '@components/NewReleases'
import { Navigation } from '@components/Navigation'
import { PlayBack } from '@features/PlayBack'
const Container = styled.div`
  height: 100vh;
  background: white;
  display: flex;
`

const Content = styled.div`
  width: 100%;
  position: relative;
`

const Dashboard = () => {
  useGetUserProfileData()

  return (
    <Container>
      <Navigation />
      <Content>
        <NewReleases />
        <PlayBack />
      </Content>
    </Container>
  )
}

export { Dashboard }
