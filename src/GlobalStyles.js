import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
    }
`

export default GlobalStyles;