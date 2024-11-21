import React from 'react'
import styled from 'styled-components'

const PlayerContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: red;
  height: 72px;
`

const PlayBack = () => {
  return <PlayerContainer>PlayBack</PlayerContainer>
}

export { PlayBack }
