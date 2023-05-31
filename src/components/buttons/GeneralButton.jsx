import React from 'react'
import styled from '@emotion/styled'


const Button = styled.a`
background-color: var(--orange-flybondi);
width:${props => props.width};
border-radius: 50px;
padding: ${props => props.padding};
font-size: ${props => props.font};
font-weight: 700;
text-align: center;
color: #222;
cursor: pointer;
transition: 0.2s;
box-shadow: 5px 7px 10px 0.5px #f0f0f0;
text-decoration: none;

&:hover{
    background-color: var(--lightOrange-flybondi);
}
`



export default function GeneralButton({ width,font,text,padding,href,target }) {
  return (
 <>
 
 <Button href={href} width={width} font={font} padding={padding} target={target}>{text}</Button>
 
 </>
  )
}
