import React, { useEffect, useState } from 'react'
import { Container, Card, CardContainer, Header } from './NewReleases.styled'
import { useSpotifyContext } from '@hooks/SpotifyProvider'
import axios from 'axios'

const NewReleases = () => {
  const [newReleases, setNewReleases] = useState([])
  const { isAuthenticated, accessToken } = useSpotifyContext()

  const createState = (items) => {
    const result = items.map((item) => {
      const { id, name, artists, images, href } = item
      return {
        id,
        name,
        artists: artists[0].name,
        images: images[1].url,
        href,
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
          <div className="image-container">
            <a href={item.href}>
              <img src={item.images} alt={item.name} />
            </a>
          </div>
          <h3>{item.name}</h3>
          <p>{item.artists}</p>
        </Card>
      )
    })
    return newReleasesList
  }

  return (
    <Container>
      <Header>New Releases</Header>
      <CardContainer>{renderNewReleases()}</CardContainer>
    </Container>
  )
}

export { NewReleases }
