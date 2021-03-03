import styled from 'styled-components';

import img from '../../../assets/fundo.png';
import partners from '../../../assets/partners.jpg';

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
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

export const Aboutus = styled.div`
  padding: 15px;
  position: relative;
  width: 100%;
  height: 280px;
  box-shadow: 2px 5px 10px 0 rgba(0,0,0,0.50);

  .header{
    text-align: center;
    padding: 15px;
    font-size: 18px;
    margin-top: 10px;
  }

  .footer{
    text-align: center;
    font-size: 16px;
    margin: 0 auto;
    width: 100%;
    max-width: 730px;
    padding: 5px;
  }

`;

export const Partners = styled.div`
  margin-top: 60px;  
  position: relative;
  width: 100%;
  height: 300px;
  background: url(${partners});

  .header{
    text-align: center;
    padding: 25px;
    font-size: 15px;
    margin-top: 10px;
  }

  .block {
    height: 250px;
    background: rgba(255, 255, 255);
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    box-shadow: 2px 5px 10px 0 rgba(0,0,0,0.50);
  }

  .block h1{
    padding: 35px;
    font-size: 18px;
    color: rgba(0, 0, 0,.7);
  }
  .block p{
    padding: 35px;
    font-size: 15px;
    color: rgba(0, 0, 0,.7);
  }

`;
