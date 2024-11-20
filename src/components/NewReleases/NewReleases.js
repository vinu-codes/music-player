import React, { useEffect, useState } from 'react'
import { Container, Card, CardContainer } from './NewReleases.styled'
import { useSpotifyContext } from '@hooks/SpotifyProvider'
import axios from 'axios'

const NewReleases = () => {
  const [newReleases, setNewReleases] = useState([])
  const { isAuthenticated, accessToken } = useSpotifyContext()

  const createState = (items) => {
    const result = items.map((item) => {
      const { id, name, artists, images } = item
      return {
        id,
        name,
        artists: artists[0].name,
        images: images[1].url,
      }
    })
    setNewReleases(result)
  }

  useEffect(() => {
    if (!!isAuthenticated && accessToken) {
      console.log('lets get the new releases')
      const getUserProfileData = async () => {
        const config = {
          url: 'https://api.spotify.com/v1/browse/new-releases',
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + accessToken,
          },
        }
        try {
          const response = await axios(config)
          console.log(response.data, 'received new releases')
          createState(response.data.albums.items)
        } catch (error) {
          console.log({ error: error }, 'error received getting profile')
        }
      }
      getUserProfileData()
    }
  }, [isAuthenticated, accessToken])

  const renderNewReleases = () => {
    const newReleasesList = newReleases.map((item, index) => {
      return (
        <Card key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.images} alt={item.name} />
          <p>{item.artists}</p>
        </Card>
      )
    })
    return newReleasesList
  }

  return (
    <Container>
      <h1>New Releases</h1>
      <CardContainer>{renderNewReleases()}</CardContainer>
    </Container>
  )
}

export { NewReleases }
