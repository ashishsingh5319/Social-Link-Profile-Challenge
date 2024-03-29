import React from 'react'
import styled from 'styled-components';
  
const Card = ({image,name,}) => {
  return (
       <Styledcard >
      <div className='card'>
        <div className='info'>
        <img className='circle-img' src={image} alt='avatar'/>
        
        <h2 className='name'>{name}</h2>
        <h5 className='area'>London, United Kingdom</h5>
        
        <p>"Front-end developer and avid reader."</p>
        </div>
        <div className='bottom'>
       <button className='social-btn'>GitHub</button>
       <button className='social-btn'>Frontend Menter</button>
       <button className='social-btn'>LinkedIn</button>
       <button className='social-btn'>Twitter</button>
       <button className='social-btn'>Instagram</button>
       
      </div>
      </div>
     

      </Styledcard>
  )
}

export default Card

const Styledcard = styled.div`
   
    .circle-img{
        border-radius: 50%;
        height: 5rem;
        width: 5rem;
        margin-bottom: 0.4rem;
    }
    .name{
        font-weight: 700;
        color: hsl(0, 0%, 100%);
        margin-bottom: 0px;
        font-size: 1.5rem;
    }
    .area{
        font-weight: 600;
        color:  hsl(75, 94%, 57%);
        font-size: 14px;
        margin-top: 0.7rem;
        margin-bottom: 1.2rem;
    }
    p{
        color:hsl(0, 0%, 100%);
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 2rem;
    }
    .card{
        background-color: hsl(0, 0%, 12%);
        border-radius: 5px;
        -webkit-border-radius: 0.7rem;
        -moz-border-radius: 0.7rem;
        -ms-border-radius: 0.7rem;
        -o-border-radius: 0.7rem;
        margin-bottom: auto;
        padding: 2rem;
        margin: auto;
        max-width: 100%;
        height: auto;
    }
    .bottom {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
   }
   .social-btn{
    background-color: hsl(0, 0%, 20%);
    color: white;
    padding: 12.8px 12.8px;
    border-radius: 0.45rem;
    margin-bottom: 0.8rem;
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.6px;
    border: none;
   }
   .info{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   }
   .social-btn:hover {
    background-color:hsl(75, 94%, 57%);
    color: hsl(0, 0%, 8%);
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -moz-transition: 0.3s;
    -ms-transition: 0.3s;
    -o-transition: 0.3s;
}

`;
