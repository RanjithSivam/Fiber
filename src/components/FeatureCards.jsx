import styled from 'styled-components'
import { PRIMARY__BG } from '../constants/color'


const Card = styled.div`
    display: flex;
    flex-direction: column;
`

const Icon = styled.img`
    color: ${PRIMARY__BG};
    width: 30px;
    margin-bottom: 10px;
`

const PrimaryText = styled.h5`
    margin-bottom: 10px;
`

const SecondaryText = styled.p`
    opacity: 0.5;
    line-height: 1.3;
`

function FeatureCards({icon,primaryText,secondaryText}) {
    return (
        <Card>
            <Icon src={icon} alt="feature-icon" />
            <PrimaryText>
                {primaryText}
            </PrimaryText>
            <SecondaryText>
                {secondaryText}
            </SecondaryText>
        </Card>
    )
}

export default FeatureCards