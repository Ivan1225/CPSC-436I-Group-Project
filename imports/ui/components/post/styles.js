import styled from 'styled-components';

const StyledPost = styled.div`
  landscape {
      border-radius: 0 !important;
      position:absolute;
      top:0;
      bottom:0;
      margin:auto;
    }

    
    /* .fGnNhG.ui.six.cards{
      margin-left:10em;
    } */

    .ui.cards>.card {
    font-size: 2em;
}

    .ui.six.cards {
    margin-left: 10em !important;
    margin-right: -.75em;
    }


    .ui.cards {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 10em -.5em;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    }

    .ui.six.cards>.card {
    width: 30em;
    margin-left: 1em;
    margin-right: em;
    }
`;

export default StyledPost;

/* width: calc(16.66666667% - 1.5em); */

// margin: -.875em -.5em;