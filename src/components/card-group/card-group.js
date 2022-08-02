import React from 'react'
import styled from 'styled-components';
import { Card, Col, Row } from 'antd';

const BgCard = styled.div`
min-height:150px;
min-width:100px;
background-image:url(" https://picsum.photos/200/300" );
display:flex;
align-items:end;
justify-content:start;
color:white;
padding:0 20px 0 0;
font-family: 'EnnVisionsMedium';
border-radius:5px;
`
const Container = styled.div`
width:390px;
margin-left:10px;
overflow-x:auto;
display:flex;
gap:15px;
flex-wrap:no-wrap;
::-webkit-scrollbar {
height:1px;
}
`
const container1 = styled.div``
const container2 = styled.div``

const CardsGroup = () => {
    return (
        <Container>
            <BgCard title="BgCard title" >
                Hira Qureshi
            </BgCard>

            <BgCard title="BgCard title">
                Waqar Ahmed
            </BgCard>


            <BgCard title="BgCard title">
                Kashif Malik
            </BgCard>


            <BgCard title="BgCard title">
                Kamran Malik
            </BgCard>

        </Container>
    )
}

export default CardsGroup