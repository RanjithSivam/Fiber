import React from 'react'
import styled from 'styled-components'
import { TEXT__SECONDARY } from '../constants/color'

const Wrapper = styled.div`
    padding: 20px;
    border-radius: 5px;
    border: 1px solid ${TEXT__SECONDARY};
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const cardHOC = (Component) => {

    
    
    const InsideComponent = (props) => {

        
        return (
            <Wrapper>
                <Container>
                    <Component {...props} />
                </Container>
            </Wrapper>
            )
    }

    return InsideComponent;
}

export default cardHOC
