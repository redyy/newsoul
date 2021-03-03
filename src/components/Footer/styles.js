import styled from 'styled-components';

export const Container = styled.div`

@media only screen and (max-width: 768px) {
      & {
        display: none;
      }
    }


    @media (min-width: 1200px) {
  & {
      max-width: 1140px;
  }
  }
  @media (min-width: 992px) {
  & {
      max-width: 960px;
  }
  }
  @media (min-width: 768px) {
  & {
      max-width: 720px;
  }
  }
  @media (min-width: 576px) {
  & {
      max-width: 540px;
  }
  }
  & {
      margin: 0 auto;
      width: 100%;
  }
  @media (min-width: 1200px) {
  & {
      max-width: 1140px;
  }
  }
  @media (min-width: 992px) {
  & {
      max-width: 960px;
  }
  }
  @media (min-width: 768px) {
  & {
      max-width: 720px;
  }
  }
  @media (min-width: 576px) {
  & {
      max-width: 540px;
  }
  }
  & {
     margin: 0 auto;
      width: 100%;
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 auto;
}

.copyright {
    text-align: center;
    font-size: 18px;
    margin-top: 160px;
    color: #000;
    margin-bottom: 10px;
}

.img-fluid {
    max-width: 100%;
    height: auto;
}
 img {
    position: relative;
    max-height: 150px;
    left: 50%;
    transform: translateX(-50%);
}
img {
    border-style: none;
}
img {
    vertical-align: middle;
    border-style: none;
}
img {
    vertical-align: middle;
    border-style: none;
}
`;
