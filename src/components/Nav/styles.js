import styled from 'styled-components';
//background: rgba(60, 61, 64, 0.3);

export const Headers = styled.div`
    position: absolute; 
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    height: 80px;
    z-index: 9999;
    padding: 0px 50px;

    @media only screen and (max-width: 768px) {
    
    & {
    display: absolute;
    -webkit-box-pack: center;
    justify-content: center;
    height: 80px;
    z-index: 9999;
    background: rgba(60, 61, 64, 0.3);
    padding: 0px 20px;
    }

    }

`;

export const Anun = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    height: 25px;
    z-index: 9999;
    background: rgba(60, 61, 64, 0.2);
    border-bottom: 1px solid #8e693c;
    padding: 0px 30px;

    @media only screen and (max-width: 768px) {
    
    & {
    display: absolute;
    -webkit-box-pack: center;
    justify-content: center;
    height: 25px;
    z-index: 9999;
    background: rgba(60, 61, 64, 0.3);
    padding: 0px 20px;
    }

    }

`;
export const Links = styled.div`
    z-index: 10;
    background: #1e2127;
    font-size: 12px;
    border-bottom: 1px solid #8e693c;
    padding-top: 15px;
    padding-bottom: 6px;

    a {
    color: #fff;
    height: 100%;
    display: table-cell;
    font-family: 'Roboto';
    font-size: 15px;
    padding: 3px 5px;
    }

`;

export const Main_header = styled.div`
   z-index: 10;
    background: rgba(60, 61, 64, 0.4);
    width: 100%;
    font-size: 12px;
    border-bottom: 1px solid rgba(245, 24, 53, 0.2);
    padding-top: 15px;
    padding-bottom: 6px;

    
    @media (max-width: 768px) {
      .no-padding-sm {
          padding: 0;
      }
    }
@media (max-width: 1200px) {
  .container {
      width: 1170px;
  }
}
@media (max-width: 992px) {
  .container {
      width: 970px;
  }
}
@media (min-width: 768px) {
  .container {
      width: 1240px;
  }
}
  .container {
      margin: 0 auto;
      margin-left: 20px;
  }

  .row {
    margin: 0 auto;
}

.row:before{
  display: table;
    content: " ";
}

.header-info {
    display: inline-block;
    width: 100%;
}

@media (min-width: 768px) {
  .col-sm-6 {
      width: 50%;
  }

  .pull-right {
    float: right!important;
}

.areacliente{
  background: #8e693c;
    color: #fff;
    padding: 5px 10px 5px 15px;
    border-radius: 3px;
    z-index: 2000;
    font-size: 13px;
    position: relative;
    text-decoration: none;
}

.areacliente:hover{
  background: #f51835;
  cursor: pointer
}

}
@media (min-width: 768px) {
  .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9 {
      float: left;
  }
  & .header-info a {
    font-weight: 900;
    color: #fff;
    -webkit-transition: .5s;
    -moz-transition: .5s;
    -ms-transition: .5s;
    -o-transition: .5s;
    transition: .5s;
}
}

.col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}
`
export const Inner_header = styled.div`
    width: 100%;
    max-width: 1266px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    color: rgb(255, 255, 255);
    padding: 12px 0px;
`
export const Links_header = styled.div`
    width: 100%;
    max-width: 1410px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    color: rgb(255, 255, 255);
`


export const Cona_container = styled.div`
    height: 100%;
    display: table;
    float: left;
    cursor: pointer;

    span{
      color: #fff;
    height: 100%;
    display: table-cell;
    font-family: 'Roboto';
    font-size: 13px;
    font-weight: bold;
    margin-top: 5 px;
    }

    h1 {
    color: #fff;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    font-family: 'Roboto';
    font-size: 25px;
    padding: 0px 30px;
    text-transform: uppercase;
    }

    @media only screen and (max-width: 768px) {
    
    h1 {
    color: #fff;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    font-family: 'Roboto';
    font-size: 18px;
    padding: 0px 1px; 
    }

    }

    a {
    text-decoration: none;
    }

    small {
    font-size: 10px;
    position: absolute;
    }
`;

export const Right = styled.div`
     height: 100%;
    display: table;
    float: right;


    a {
    text-transform: uppercase;
    display: flex;
    text-align: right;
    text-decoration: none;
    font-size: 15px;
    left: 10px;
    color: #fff;
    padding: 10px;
    display: table-cell;
    vertical-align: middle;
    }

    .item:hover{
      background: #8e693c;
      cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
      .item {
        display: none;
      }

      a{
        padding: 0px 0px;
      }

    }


    .area{
      background: #8e693c;
      height: 30px;
      border-radius: 0px;
      z-index: 2000;
      position: relative;
      text-decoration: none;
      font-size: 13px;
      width: 150px;
      text-align: center;
    }

    .area:hover{
      color: #fff;
      cursor: pointer;
    }

    .item{
      transition: all 0.2s ease 0s;
      height: 7px;
    }


    div span:first-child {
    float: right;
    color: #fff;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    color: rgb(255, 255, 255);
    font-weight: bold;
    margin-bottom: -105px;
    }

    @media only screen and (max-width: 768px) {
    
    div span:first-child {
    font-size: 14px;
    float: right;
    color: #fff;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    color: rgb(255, 255, 255);
    font-weight: bold;
    }

    }

    div span:last-child {
    
    height: 100%;
    vertical-align: middle;
    font-family: 'Roboto';
    color: rgb(135, 134, 139);
    font-size: 12px;
    }
    
      img {
    width: 56px;
    height: 56px;
    border-width: 3px;
    border-style: solid;
    border-color: #f51835;
    border-image: initial;
    border-radius: 50%;  
    margin-top: -10px;  
    margin-left: 10px;
    }

`;



