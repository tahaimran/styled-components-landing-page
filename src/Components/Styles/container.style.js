import styled from "styled-components";

export const Container = styled.div `
    background-color: ${({bg}) => bg};
    background-image: url(${({url}) => url} );
    background-repeat: no-repeat;
    display: ${({flexD}) => flexD};
    justify-content: ${({justify})=>justify};
    flex-direction: ${({direction}) => direction};
    width: ${({width})=>width};
    height:${({height})=>height} ;
    padding: 20px;
    margin: ${({margin})=>margin};
    padding-bottom: 44px;

    @media (max-width: 950px){
        flex-direction: ${({column})=>column};
        text-align: ${({center})=> center};
        justify-content: ${({justifys})=>justifys};

    }
`;