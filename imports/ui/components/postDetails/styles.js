import styled from 'styled-components';


const StyledDetails = styled.div`
  /* @media (min-width: 992px)
.container {
  margin: 25px;
} */
  /* .da{
      max-height: 300px;
  }
  .details{
      height:100px;
  }
  img{
      max-height: 300px;
  } */

.container {
    width: 100%;
    padding-right: 100px;
    padding-left: 200px;
    padding-top: 100px;
    margin-right: auto;
    margin-left: auto;
}

.ui.grid {
    margin-top: -1rem;
    margin-bottom: -1rem;
    margin-left: -1rem;
    margin-right: -1rem;
}

@import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

.text{
    color: #201f1f;
    font-size: 250%;
    font-family: 'Amatic SC', cursive;
}

.image-gallery-slides {
    text-align: center;
}
.image-gallery-slide {
    background: #fff;
}
.image-gallery-slide img{
    width: auto;
    height: 300px;
}
.image-gallery-content.fullscreen .image-gallery-slide img{
    height: auto;
}

.postingTitle {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 15px 0;
    font-size: 45px;
    font-weight: bold;
    font-family: 'Amatic SC', cursive;
}
.content-time {
    color: #707070;
    padding: 3px 10;
    font-size: 12px;
    font-weight: lighter;
    border-bottom: solid 0.5px #a7a7a7;
    font-family: 'Roboto', sans-serif;
}

.description {
    font-family: 'Roboto', sans-serif;
    margin-left: 35px;
    font-size: 50%
}

small {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: smaller;
    font: inherit;
    vertical-align: baseline;
}

.cell-h {
    padding-right: 10px;
    overflow: hidden;
    width: auto;
    zoom: 1;
    position: relative;
    font-family: 'Amatic SC', cursive;
}
.like {
    margin-right:10px;
    float:left;
}
`;

export default StyledDetails;