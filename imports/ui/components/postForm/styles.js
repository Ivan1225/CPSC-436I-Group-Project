import styled from 'styled-components';

const StyledSignup = styled.div`
  border: 1px solid var(--gray-lighter);
  padding: 25px;
  max-width: 425px;
  margin: 0 auto;
  border-radius: 3px;

  .page-header {
    margin-top: 0;
  }

  .fr-toolbar.fr-top {
    z-index: 0;
  }
  > .row {
    margin: 0 !important;
  }

  button[type='submit'] {
    height: 41px;
    margin-top: 20px;
  }

  /* .description{
    width  : 100%;
    height : 100px;
  } */

  .fr-box.fr-basic.fr-top .fr-wrapper{
    height: 150px;
  }

  .dropzone {
    width  : 100%;
    height : 100px;
    border : 1px solid black;
  }
`;

export default StyledSignup;
