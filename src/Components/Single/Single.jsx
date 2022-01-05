import React from 'react'
import { Container } from '../Styles/container.style'
import { Nav, Img, H3, P , Icon} from '../Styles/Header.style'
import { Button } from '../Styles/button.style';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Single() {
    return (
        <Container height=''   url='/images/bg-desktop.svg' bg='hsl(257, 40%, 49%)'>
            <Nav>
                <img src='/images/logo.svg' />
            </Nav>
            <Container column='column' center='center'   margin='5px 0px 0px 0px' flexD='flex' justify='space-between'>
                <Container width='100%'>
                    <Img src="/images/illustration-mockups.svg" alt="" srcset="" />
                </Container>
                <Container >
                    <H3>Build The Community <br />  Your Fans Will Love</H3>
                    <P>Huddle imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</P>
                    <Button>
                        Register
                    </Button>
                </Container>
            </Container>
            <Container flexD='flex'  center='center'  justify='end'justifys='center'>
               <Icon><Facebook /></Icon> 
               <Icon>  <Twitter /></Icon> 
               <Icon>  <Instagram /> </Icon> 

            </Container>
        </Container>
    )
}

export default Single
