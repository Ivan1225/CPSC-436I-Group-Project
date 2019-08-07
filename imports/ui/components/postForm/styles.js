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

  .thumb {
    display: inline-flex;
    borderRadius: 2;
    border: 1px solid #eaeaea;
    marginBottom: 8;
    marginRight: 8;
    width: 100;
    height: 100;
    padding: 4;
    boxSizing: border-box;
  }

  .thumbInner {
    display: flex;
    minWidth: 0;
    overflow: hidden;
  }

  .img {
    display: block;
    width: 100%;
    height: 100%;
  };
`;

export default StyledSignup;
