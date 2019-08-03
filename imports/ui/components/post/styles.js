import styled from 'styled-components';

const StyledPost = styled.div`
  .ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  /****** post ******/

  .post {
    &-img-wrapper {
      margin: -15px -15px 0;
      height: 0;
      padding-bottom: 100%;
      position: relative;
      overflow: hidden;
      border-bottom: 1px solid @panel-default-border;
    }

    &-img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &-price {
      margin-bottom: 0;
    }
  }
`;

export default StyledPost;
