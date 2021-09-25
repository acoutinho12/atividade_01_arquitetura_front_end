import { createGlobalStyle } from 'styled-components';
const randomColor = Math.floor(Math.random()*16777215).toString(16); 
const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.bibliografia {
    width: 60vw;
    margin-left: 32px;
}
.center {
    display:flex;
    align-items:center;
    justify-content:center;
}
.flex-direction-column {
    flex-direction: column;
}
.margin16 {
    margin: 16px;
}
.marginVertical16 {
    margin: 16px 0;
}
.randomTextColor {
    color: #${randomColor}
}
.width50 {
    width: 50%;
}
.textGray {
    color:gray;
}
.cursorPointer {
    cursor: pointer;
}
.colorBlue {
    color: #1d4e89
}
`;
 
export default GlobalStyle;