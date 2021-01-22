import React from 'react'
import {
    Hero, CallToAction, ScrollDownIndicator, Flex, Heading, Subhead, Phone
} from 'react-landing-page'

export default function CalientaManosMain() {
    return (

        <>   
        <Hero
            color="black"
            bg="white"
            backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
        >
¿Estás con las manos congeladas?
            <Flex flexWrap='wrap' alignItems='center'>
                
                <Flex alignItems='flex-start' width={[1, 1 / 2]} p={3}>
                    <Phone src='https://via.placeholder.com/205x412' color='white'
                        style={{ transform: 'translate(-32px, 0px)' }} />
                </Flex>
                <Flex width={[1, 1 / 2]} alignItems='center' flexDirection='column' p={3} >
                    <Heading>CALIENTAMANOS</Heading>
                    <Subhead fontSize={[2, 3]}>Descubre el mejor!</Subhead>
                    <Flex mt={3} flexWrap='wrap' justifyContent='center'>
                        <CallToAction bg="green" mb={2}>COMPRAR</CallToAction>
                    </Flex>
                </Flex>
            </Flex>



        </Hero>


        </>
    );

}