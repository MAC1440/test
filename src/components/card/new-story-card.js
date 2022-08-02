import React from 'react'
import cardImage1 from '../../assets/icons/dp.png'
import addbutton from '../../assets/icons/ic_add_story.svg'
import styled from 'styled-components'

const CardTitle = styled.div`
color:black;
font-family: 'EnnVisionsMedium';
font-size:12px;
height:fit-content;
padding: 20px 0 0px 0;
height:52px;
`
const AddButton = styled.img`
position:absolute;
right: 32%;
top: -15px;
`
const CardTitleContainer = styled.div`
position:relative;
`
const Container = styled.div`
height:155px;
box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
border-radius:5px;
`
const Card = styled.div`
width:100px;
`

const NewStoryCard = () => {
  return (
    <Container>
      <Card >
        <img alt="example"
          src={cardImage1} width='100px' />
        <CardTitleContainer>
          <CardTitle> CREATE STORY</CardTitle>
          <AddButton src={addbutton} />
        </CardTitleContainer>
      </Card>
    </Container >
  )
}

export default NewStoryCard