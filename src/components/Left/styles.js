import styled from 'styled-components';

export const Be = styled.div`
  background: #1a1918;
    height: calc(107vh - 70px);
    border-bottom: 0;
    overflow-y: auto;
    overflow-x: hidden;
    max-width: 250px;

    @media only screen and (max-width: 768px) {
      & {
        display: none;
      }
    }

  .account-details {
    margin: 20px 0;
    text-align: center;
    align-content: center;
    }

    .profile-pic {
    height: 220px;
    width: 220px;
    background: transparent;
    border-radius: 60px;
    margin: 0 auto;
    display: block;
    transition: all .3s;
  }

  .nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  ol, ul {
      margin-top: 0;
      margin-bottom: 10px;
  }

  nav li {
      background: 0 0;
      float: none;
      margin: 20px 10px 0;
  }
  li.account {
      background-color: transparent;
      font-size: 17px;
  }
  .nav>li {
      position: relative;
      display: block;
  }

  a{
    color: #fff;
  }

  .dropdown {
  display: inline-block;
  position: relative;
  width: 100%;
  transition: all .5s ease;
}

#drop-content{
  position: relative;
  z-index: 1;
  width: 100%;
  transform: none;
  opacity: 0;
  transition: all .5s ease;
}
#drop-contentp{
  position: relative;
  z-index: 1;
  transform: none;
  opacity: 0;
  transition: all .5s ease;
}
#drop-contentp a{
  margin-top: 10px;
  padding: 5px;
  font-size: 15px;
  display: block;
  background: transparent;
  transition: all 0.2s ease 0s;
}
#drop-contentp a:hover{
  color: #8e693c;
}

.span{
  padding: 4px;
  background:  #8e693c;
  height: 20px;
  width: 50px;
  border-radius: 2px;
}

#drop-content a{
  padding: 10px 15px;
  font-size: 14px;
  text-align: left;
  display: block;
  background: rgba(74, 76, 79, 0. );
  width: 100%;
  transition: all 0.2s ease 0s;
}

#drop-content a:hover{
  color: #8e693c;
}
#drop-contentf a{
  padding: 10px 15px;
  font-size: 14px;
  text-align: left;
  display: block;
  background: rgba(74, 76, 79, 0.1);
  width: 100%;
  transition: all 0.2s ease 0s;
}

#drop-contentf a:hover{
  color: #8e693c;
}

  button {
    color: #fff;
    font-size: 16px;
    background: #1a1918;
    height: 50px;
    padding: 15px 15px;
    text-align: left;
    float: none;
    display: inline-block;
    width: 100%;
    border: 0;
    width: 100%;
    transition: all 0.2s ease 0s;
    cursor: pointer;
  }

  button:hover{
    background: #8e693c;;
  }

`;
