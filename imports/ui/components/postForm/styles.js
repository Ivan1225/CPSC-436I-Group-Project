import styled from 'styled-components';

const StyledSignup = styled.div`
  border: 1px solid var(--gray-lighter);
  padding: 25px;
  max-width: 800px;
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

  button {
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
    position: relative;
    display: flex;
    minWidth: 0;
    overflow: hidden;
  }

  .img {
    display: block;
    width: 100%;
    height: 100%;
  };

  .thumbInner img:hover {
    opacity: 0.5
  }
  .thumbInner:hover a {
    opacity: 1; /* added */
    top: 0; /* added */
    z-index: 500;
  }

  .thumbInner:hover a i {
    top: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .thumbInner a {
    display: block;
    position: absolute;
    top: 0%;
    opacity: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    color: inherit;
}
`;

export default StyledSignup;
