import styled from 'styled-components'
import { PRIMARY__BG, SECONDARY__BG, TEXT__DARK, TEXT__PRIMARY__BLACK, TEXT__PRIMARY__WHITE, TEXT__SECONDARY } from '../constants/color'


export const Button = styled.button`
    background-color: ${props => props.primary===true ? PRIMARY__BG : "transparent"};
    color: ${props => !props.primary===true ? props.theme===true ? TEXT__DARK : TEXT__PRIMARY__BLACK : TEXT__PRIMARY__WHITE};
    border-radius: 5px;
    padding: 10px 20px;
    border: none;
    text-transform: capitalize;
    font-weight: bold;
    cursor: pointer;
    margin: 0 10px;
    outline: none;
`;

export const CardButton = styled(Button)`
    font-weight: normal;
    border: 1px solid;
    border-color: ${TEXT__SECONDARY};
    width: 100%;
`;