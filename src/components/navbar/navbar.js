import React from 'react'
import { Col } from 'antd';
import styled from 'styled-components'
import logo from '../../assets/icons/ic_header_logo.svg';
import avatar from '../../assets/icons/profile.png'


const Header = styled.div`
background:white;
height:70px;
display:flex;
align-items:center;
box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
margin-bottom:10px;
`
const Links = styled.a`
color:black;
margin: 0px 10px;
font-family: 'EnnVisionsMedium';
`
const Avatar = styled.img`
border-radius:50%;
border:1px solid #888;
`




const Navbar = () => {
    return (
        <Header>
            <Col span={8}>
                <img src={logo} alt="" />
            </Col>
            <Col span={8}>
                <Links href="">FIND A HOME</Links>
                <Links href=""> LIST A PROPERTY  </Links>
                <Links href=""> FIND A PROFESSIONAL </Links>
                <Links href=""> RESOURCES </Links>
            </Col>
            <Col span={8}>
                <Avatar src={avatar} alt="" />

            </Col>
        </Header>


    )
}

export default Navbar