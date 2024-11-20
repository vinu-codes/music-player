import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 20px;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #dfe3e8;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 200px;
  img {
    width: 100%;
    border-radius: 10px;
  }
  h3 {
    margin: 10px 0;
  }
  p {
    margin: 10px 0;
  }
`

export { Container, Card, CardContainer }
