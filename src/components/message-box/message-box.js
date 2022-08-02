import React from 'react'
import styled from 'styled-components'
import cardImage1 from '../../assets/icons/dp.png'
import options from '../../assets/icons/ic_nav.svg'
import messageImage from '../../assets/icons/messagebodyimage.jpg'
import details from '../../assets/icons/ic_detail.svg';
import bed from '../../assets/icons/ic_pro_bed.svg'
import bath from '../../assets/icons/ic_pro_bath.svg'
import area from '../../assets/icons/ic_pro_area.svg'
import like from '../../assets/icons/ic_like.svg'
import message from '../../assets/icons/ic_comment.svg'
import sent from '../../assets/icons/ic_sent.svg'
import tag from '../../assets/icons/ic_fav.svg'


const Container = styled.div`
width:500px;
border:1px solid #80808066;
`
const Heading = styled.div`
padding:5px;
display:flex;
justify-content:space-between;
width:100%;
`
const Details = styled.div`
display:flex;
gap:10px;
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
const ImageHolder = styled.div`
margin-top:15px;
height:332px;
width:100%; 
background-image: url(${messageImage});
background-size:contain;
background-repeat:no-repeat;
`
const RedTab = styled.div`
font-family: 'EnnVisionsMedium';
align-items:center;
display:flex;
justify-content:space-between;
background: #C7112B;
color:white;
padding: 0 10px;
height:30px;
cursor:pointer;
&:hover{
    background:red;
}
`
const Description = styled.div`
margin-top:10px;
font-family: 'EnnVisionsMedium';
text-align:start;
padding:0 10px
`
const Price = styled.div`
font-family: 'EnnVisionsMedium';
display:flex;
justify-content:space-between;
padding:10px 10px;
color:#bb0000;
font-weight:bold;
`
const Button = styled.button`
font-weight:bold;
background:#ffcfcf;
border:none;
border-radius:3px;
padding:2px 6px;
gap:10px;
cursor:pointer;
&:hover{
background:#fa6464;
color:#ffcfcf;
r}
`

const Icons = styled.div`
display:flex;
padding:10px 5px;
justify-content:space-between;
border-top:1px solid #80808062;
border-bottom:1px solid #80808062;
`
const SocialIcons = styled.div`
display:flex;
padding:10px 10px;
justify-content:space-between;
border-top:1px solid #80808062;
border-bottom:1px solid #80808062;
`
const Grey = styled.p`
color:grey;
cursor:pointer;
&:hover{
    color:black
}
`
const TextBox = styled.p`
text-align:start;
`

const MessageBox = () => {
    return (
        <Container>
            <Heading>
                <Details>
                    <img src={cardImage1} alt="cardImage" width={50} style={{ borderRadius: '5px' }} />
                    <div>
                        <b>Hira Qureshi</b> <br />
                        <span style={{ fontSize: 'small', color: 'grey' }}>5 hours ago</span>
                    </div>
                    <Link> Follow </Link>
                </Details>
                <div >
                    <img src={options} alt="" />
                </div>
            </Heading>
            <ImageHolder />
            <RedTab>
                <span>
                    Visited Now
                </span>
                <span>
                    <img src={details} alt="" />
                </span>
            </RedTab>
            <Description>
                <h3> 831 Maidstone Drive Bangalow</h3>
                <p style={{ color: 'grey' }}> L7A 0K5 , Brampton . Ontario, Canada </p>
            </Description>
            <Price>
                <Button> For Sale</Button>
                <span> $746,000 </span>
            </Price>
            <Icons>
                <span><img src={bed} alt="" /> 3 bed</span>
                <img src={bath} alt="" />
                <span>
                    <img src={area} alt="" />
                    8x10 m <sup>3</sup>
                </span>

            </Icons>
            <SocialIcons>
                <div>
                    <img src={like} alt="" />
                    <img src={message} alt="" style={{ margin: '0 15px' }} />
                    <img src={sent} alt="" />
                </div>
                <div>
                    <img src={tag} alt="" />
                </div>
            </SocialIcons>
            <TextBox>
                <b>60 views</b>
                <p><img src={cardImage1} alt="" width={20} style={{ borderRadius: '50%' }} /> Liked by yousfshk and 214,033 others </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi quidem veritatis adipisci quae fugiat qui non dolores fugit maiores, dolor tempora atque incidunt in.
                </p>
                <Grey>See More</Grey>
                <p> Maqsood Awesome property on premium location </p>
                <Grey> View all 45 Comments </Grey>
            </TextBox>



        </Container>
    )
}

export default MessageBox