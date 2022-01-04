import styled from "styled-components";

export const Button = styled.button `
    width: 150px;
    height: 40px;
    background-color: white;
    border: none;
    border-radius: 30px;
    color: hsl(257, 40%, 49%);

    &:hover{
          background-color: hsl(300, 69%, 71%);
          color: white;
          cursor: pointer;
          transition: 0.6s;
          transform: scale(1.2);

    }
`;
