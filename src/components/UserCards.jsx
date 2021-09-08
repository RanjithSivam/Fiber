import styled from 'styled-components'
import { PRIMARY__BG, TEXT__SECONDARY } from '../constants/color'
import { Button } from './Button'
import cardHOC from './CardHOC'

const UserDetails = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
`

const UserImage = styled.img`
    border-radius: 50%;
    width: 48px;
    margin-right: 10px;
`

const UserNameContainer = styled.div`
    display:flex;
    flex-direction: column;
`

const UserName = styled.small`
    text-transform: capitalize;
    color: ${PRIMARY__BG};
    font-weight: bold;
`

const UserComment = styled.p`
    line-height: 1.4;
    margin-bottom: 20px;
`

const UserButton = styled(Button)`
    border: 1px solid ${TEXT__SECONDARY};
    color: ${PRIMARY__BG};
    margin: 0;
`

function UserCards({image,username,amount,comment}) {
    return (
        <>
            <UserDetails>
                <UserImage src={image} alt={"user-logo"}/>
                <UserNameContainer>
                    <UserName>{username}</UserName>
                    <small>${amount}k in revenue</small>
                </UserNameContainer>
            </UserDetails>
            <UserComment>
                {comment}
            </UserComment>
            <UserButton>
                view {username.split(" ")[0]}'s portfolio
            </UserButton>
        </>
    )
}

export default cardHOC(UserCards)
