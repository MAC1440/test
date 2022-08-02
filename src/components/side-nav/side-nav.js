import React from 'react'
import cardImage1 from '../../assets/icons/dp.png'
import styled from 'styled-components';
import { navData } from './navData';

const Container = styled.div`
margin-left:20px;
// border:1px solid black;
height:600px;
width:300px;
padding: 0px 10px;
`
const Image = styled.img`
border-radius:50%;
margin-right:10px;
`
const Profile = styled.div`
display:flex;
align-items:center;
gap:10px;
text-align:start;
`
const Grey = styled.span`
color:grey;
`

const SingleRow = styled.div`
text-align:start;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:10px; 
`
const Link = styled.span`
color:#0099f1;
cursor:pointer;
font-family: 'EnnVisionsMedium';
&:hover{
    text-decoration:underline;
    font-weight:bold;2s
}
`
const SideNav = () => {
    return (
        <Container>

            <Profile>
                <Image src={cardImage1} alt="" />
                <div>
                    <b>Lilly Evans</b>
                    <br />
                    <Grey> lily.evans123 </Grey>
                </div>
            </Profile>

            <SingleRow>
                <span>Suggetions For You</span>
                <span> See All </span>
            </SingleRow>

            {navData.map(
                item => (
                    <SingleRow key={item.id}>
                        <SingleRow>

                            <div>
                                <Image src={cardImage1} alt="" width={40} />
                            </div>
                            <div>
                                <b>{item.name}</b> <br />
                                <Grey>{item.job}</Grey>
                            </div>
                        </SingleRow>
                        <div>
                            <Link> Follow </Link>
                        </div>

                    </SingleRow>
                )
            )}



        </Container>
    )
}

export default SideNav