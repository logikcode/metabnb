import styled from "styled-components";

export const PageStyled = styled.div`

/* height: 100vh; */
width: 98.7vw;
margin: 0 auto;
/* background: gray; */
@media screen and (max-width: 768px) {
    /* width: fit-content; */
    width: 70%;
}

`

export const BodySection = styled.section`

width: 90%;
/* background: red; */
margin: 0 auto;

`

export const Heading = styled.div`
margin: 39px 0px;
border: 1px solid blue;
width: 100%;

.heading-text{
    font-family: 'Red Rose';
font-style: normal;
font-weight: 700;
font-size: 38px;
line-height: 60px;
text-align: center;
color: #000000;

}

`

export const BodyContent = styled.div`
/* height: 100%; */
max-width: 100%;

`

export const GridContainer = styled.div`
border: 1px solid green;
width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
/* grid-template-rows: 200px; */
gap: 10px;
margin: 0 auto;
@media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
}
`