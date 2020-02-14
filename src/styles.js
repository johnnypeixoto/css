import styled from 'styled-components';

export const Container = styled.div`
  svg {
    width: 60%;
  }

  #right-weel,
  #left-weel {
    animation: whell 1s infinite linear;
    transform-origin: center;
    transform-box: fill-box;
  }

  #bike-boy {
    animation: bike 1s ease-in-out infinite alternate;
    transform-origin: bottom;
  }

  #hat {
    animation: hat 1s ease-in-out infinite alternate;
    transform-origin: center;
    transform-box: fill-box;
  }

  @keyframes whell {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes bike {
    from {
      transform: rotateX(0deg);
    }
    to {
      transform: rotateX(20deg);
    }
  }

  @keyframes hat {
    from {
      transform: translateY(-10%) rotateZ(0deg);
    }
    to {
      transform: translateY(10%) rotateZ(15deg);
    }
  }
`;
