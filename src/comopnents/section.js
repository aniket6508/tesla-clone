import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,description,BackgroundImg,LeftbtnText,RightbtnText}) {
  return (
    <Wrap bgImage={BackgroundImg}>
        <Fade bottom>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
        <ButtonGroup>
            <LeftButton>
                {LeftbtnText}
            </LeftButton>
            {RightbtnText && 
                <RightButton>
                    {RightbtnText}
                </RightButton>
            }
        </ButtonGroup>
        </Fade>
        <DownArrow src="/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

export default Section
const Wrap =  styled.div`
width: 100vw;
height:100vh;
background-image:${props => `url("${props.bgImage}")`};
background-size: cover;
background-position:center;
background-repeat: no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonGroup=styled.div`
margin-bottom:30px;
display:flex;
@media (max-width: 760px){
    flex-direction:column;
}
`
const LeftButton=styled.div`
    background-color: rgb(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:14px;
    cursor:pointer;
    margin-bottom:12px;
    margin: 8px;
`
const RightButton=styled(LeftButton)`
    background-color:white;
    color:black;
    opacity:0.65;
`
const DownArrow = styled.img`
margin-top:20px;
height:40px;
animation: animateDown infinite 1.5s;
overflowX:hidden;
`
const Buttons = styled.div`
`