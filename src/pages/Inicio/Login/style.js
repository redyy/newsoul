import styled from 'styled-components';

import img from '../../../assets/fundo.png';
import partners from '../../../assets/partners.jpg';

export const Form = styled.form`
  background: #fff;
  box-shadow: 0 0 30px 5px rgba(0,0,0,0.15);
  max-width: 400px;
  position: relative;
  width: 100%;
  padding: 20px;
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  -ms-flex: 0 0 25%;
    flex: 0 0 35%;
  align-items: center;

  .forgot{
    color: #999;
   float: right;
   margin-bottom: 12px; 
   margin-right: 60%;
   cursor: pointer;
  }

  .forgot:hover{
    color: #8e693c;
  }



  input {
    display: flex;
    height: 46px;
    background: #fff;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #000;
    font-size: 15px;
    width: 100%;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    border-radius: 5px;
    transition: all 0.2s ease 0s;
    &::placeholder {
      color: #999;
    }
  }
  
  input:focus {
      border-width: 2px;
      border-style: solid;
      border-color: #8e693c;
      border-image: initial;
      border-radius: 5px;
    color: #000;
  }

  button {
    color: #fff;
    font-size: 16px;
    background: #8e693c;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    transition: all 0.2s ease 0s;
    cursor: pointer;
  }

  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }

  .forgot_password {
    font-size: 14px;
    font-weight: 600;
    color: rgba(255,255,255, 0.5);
      opacity: 0.8;
    align-self: flex-start;
    margin: 1px 0px 20px;
    transition: opacity 0.2s ease 0s;
  }

  hr {
    margin: 1px 0;
    border: none;
    border-bottom: 2px solid rgba(255,255,255, 0.5);
    width: 100%;
  }

  .disabled {
    color: #fff;
    font-size: 16px;
    background: rgb(4, 211, 97, 0.5);
    box-shadow: 0 0 0 rgb(4, 211, 97, 0.8);
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    animation: pulse 1s;
    animation: background infinite;
    cursor: not-allowed;
  }

  .enabled {
    position: relative;
    border-radius: 5px;
    top: 10px;
    width: 400px;
    height: 1px;
    box-shadow: 0 0 1px #31bd24, 0 0 1px #31bd24, 0 0 3px #31bd24, 0 0 5px #31bd24, inset 0 0 1px #31bd24, inset 0 0 2px #31bd24, inset 0 0 6px #31bd24, inset 0 0 5px #31bd24;
    z-index: -1;
    background-size: 400%;
  }

  @keyframes background {
    100% {
      background: rgb(113, 89, 193);
    }
    50% {
      background: rgb(113, 89, 193, 0.5);
    }
    100% {
      background: rgb(113, 89, 193);
    }
  }

`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 40vh; 
  background: url(${img}) 0% 0% / cover fixed, rgb(11, 10, 13);

  .mid{
    position: relative;
    top: 50%;
    transform: translateY(-50%);  
  }

  .mid .logo img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-height: 290px;
  }

  button {
    margin-top: 30px;
    color: #fff;
    font-size: 16px;
    background: rgba(142, 105, 60);
    height: 45px;
    border: 0;
    border-radius: 5px;
    width: 250px;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    box-shadow: 2px 5px 10px 0 rgba(0,0,0,0.50);
  }

  button:hover{
    background: #8e693c;
  }

  .welcome{
    text-align: center;
    font-size: 30px;
    color: #fff;
    text-shadow: 0.3px 0.3px 1px #000;
  }

  .welcome-2{
    text-align: center;
    font-size: 16px;
    color: #fff;
  }

  .fadeIn {
    animation-name: fadeIn;
  }
  .animated {
      animation-duration: 1s;
      animation-fill-mode: both;
  }

  .intro-particle {
    position: absolute;
    bottom: -80px;
    right: 0;
    z-index: -1;
    max-height: 50vh;
  }

  @media only screen and (max-width: 768px) {
    .intro-particle{
      display: none;
    }
  }

  @keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-moz-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-o-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-ms-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

`;

export const ContentWrapper = styled.div`
  max-width: 1250px;
    position: relative;
    margin: -80px auto 0;
    background: transparent;
    z-index: 10;
    margin-bottom: 50px;
    .blank {
    padding: 50px 30px;
    }

    .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  @media (min-width: 768px) {
  .col-md-2 {
      -ms-flex: 0 0 16.666667%;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
  }
  }

  @media (min-width: 768px) {
  .col-md-10 {
      -ms-flex: 0 0 83.333333%;
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
  }
  }

  h3{
    font-size: 1.55rem;
    color: #fff;
    margin-left: 15px;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
    border-style: none;
    vertical-align: middle;
  }

  a {
    color: #ababab;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    }

  a:hover{
    color: #8e693c;
  }  

  .text-justify {
    text-align: justify;
    padding: 15px;
    color: #fff;
}
.text-justify {
    text-align: justify!important;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
`;







export const Bg = styled.div`
  padding: 25px 20px;
  background: transparent;
  color: #fff;

  .bottom{
   padding: 20px;
  } 

  .bottom hr {
    padding: 5px;
  }
  
  .produto{
    background-color: rgba(60, 61, 64, 0.05);
    border: solid 2px #8e693c;
  }

  .text-center {
    text-align: center!important;
    font-size: 25px;
    
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .card{
    padding: 20px;
    border: none;
    border-radius: 0;
    transition: all ease .2s;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: rgba(60, 61, 64, 0.05);
    background-clip: border-box;
    border-radius: .25rem;
  }

  img{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    max-width: 130px;
    color: #fff;
  }

`;

export const Status = styled.div`
  background: rgba(60, 61, 64, 0.1);
  color: #fff;
  padding: 25px 20px;

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    background-color: rgba(60, 61, 64, 0.05);
    height: 50px;
  }


  @media (min-width: 768px) {
  .col-md-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 43.333333%;
    margin-top: 13px;
  }
  }

  .icon{
    margin-right: 5px;
  }

  .text-center {
    text-align: center!important;
    margin: 0;
    font-size: 1.5rem;
}

`;

export const Item = styled.div`
    flex-basis: calc(33.333% - 10px); 
    margin: 0 0px; 
    min-width: calc(100% * (1/4) - 1px);
    border-style:solid;
    background: rgba(60, 61, 64, 0.2);
    border-radius: 5px;
    height: 250px;
    width: 600px;
    transition: all 0.2s ease 0s;
    margin-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    border-radius: 5px;
    text-align: center;

    &:nth-child(3n+2),
    &:nth-child(3n+3) {
    margin-left:15px;  
}

    &:hover{
    background: rgba(60, 61, 64, 0.4);
    }

    .pulse-block{
        height: 20px;
        width: 200px;
        background: rgb(31, 163, 77);
        display: none;
    }

    .pulse {
    position: relative;
    left: 110px;
    width: 25px;
    top: 15px;
    height: 25px;
    border-radius: 100%;
    background: rgb(31, 163, 77);
    cursor: pointer;
    box-shadow: 0 0 0 rgb(31, 163, 77);
    animation: pulse 2s infinite;
    }


    @-webkit-keyframes pulse {
    0% {
        -webkit-box-shadow: 0 0 0 0 rgb(31, 163, 77);
    }
    70% {
        -webkit-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
    }
    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
    }
    @keyframes pulse {
    0% {
        -moz-box-shadow: 0 0 0 0 rgb(31, 163, 77);
        box-shadow: 0 0 0 0 rgb(31, 163, 77);
    }
    70% {
        -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
        box-shadow: 0 0 0 10px rgba(204,169,44, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
        box-shadow: 0 0 0 0 rgba(204,169,44, 0);
    }
    }

    .Title{
     color: #fff;
     align-content: center;
     margin-top: 20px;
     padding: 5px;
     font-size: 23px;
     font-weight: light;
     text-transform: uppercase;
     letter-spacing: 1px;
    }

    .price{
     color: #fff;
     align-content: center;
     padding: 1px;
    }

    .euro{
        font-size: 21px;
        margin-left: 1px;
        font-weight: bold;
    }

    .Valor{
        font-size: 30px;
        font-weight: bold;
    }

    .regularidade{
        color: rgba(255,255,255,0.7);
        font-weight: bold;

    }

    .btn-comprar{
    margin-top: 10px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #fff;
    font-size: 16px;
    background: rgb(31, 163, 77);
    height: 40px;
    border: 0;
    border-radius: 5px;
    width: 75%;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    }

    .btn-detalhes{
    margin-top: 5px;
    font-weight: bold;
    letter-spacing: 1px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(113, 89, 193);
    border-image: initial;
    border-radius: 5px;
    text-transform: uppercase;
    color: #fff;
    font-size: 14px;
    background: transparent;
    height: 40px;
    border: 0;
    border-radius: 5px;
    width: 75%;
    transition: all 0.2s ease 0s;
    cursor: pointer;
    }

    .btn-detalhes:hover{
        background: rgb(113,89,193)
    }

`;



export const Items = styled.div`
  flex: 1; 
  display: flex; 
  flex-wrap: wrap; 
  align-content: flex-start;
  padding: 20px;

  & * {
      box-sizing: border-box;  
  }
`;

export const Tags = styled.div`
  flex: 1; 
  display: flex; 
  flex-wrap: wrap; 
  align-content: flex-start;
  margin-left: 20px;
  margin-top: 10px;
  & * {
      box-sizing: border-box;  
  }
`;

export const Tag = styled.div`
    flex-basis: calc(33.333% - 10px); 
    border-style:solid;
    background: rgba(255,255,255,0.5);
    color: #fff;
    border-radius: 5px;
    height: 20px;
    width: 50px;
    transition: all 0.2s ease 0s;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    text-align: center;

    &:nth-child(3n+2),
    &:nth-child(3n+3) {
    margin-left:5px;  
}
`;




