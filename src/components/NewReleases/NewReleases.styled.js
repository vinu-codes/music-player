import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 20px;
`

const Header = styled.h1`
  color: rgb(164, 165, 167);
  font-weight: 300;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 10px;
  width: 167px;
  img {
    width: 100%;
  }
  h3 {
    margin: 0;
    padding: 0;
    margin: 8px 0 8px 0;
    word-wrap: break-word;
    font-weight: 400;
    font-size: 18px;
  }
  p {
    margin: 0;
    padding: 0;
    word-wrap: break-word;
    font-weight: 300;
    font-size: 14px;
  }
  div.image-container {
    width: 100px;
    height: 100px;
    box-shadow: 2px 5px 10px rgba(22, 20, 19, 0.3);
    border-radius: 5px;
    width: 167px;
    height: 167px;
  }
`

export { Container, Card, CardContainer, Header }
