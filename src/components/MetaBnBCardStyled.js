import styled from "styled-components";

export const MetaCard = styled.div`
/* background: yellow; */
margin-left: 10px;
margin-bottom: 20px;
width: 250px;
height: 372px;
border: 1px solid #D7D7D7;
border-radius: 15px;

.bnb-name{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
}


.bnb-details{
    width: 98%;
    
    /* border: 1px solid red; */
   
    margin: 1px auto;
    padding: 5px;
}

.info{
    font-family: 'Red Rose';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 13px;
height: 14px;
color: #434343;

}

.span2{
    font-family: 'Red Rose';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 13px;
height: 14px;
color: #434343;
}

.bnb-availablity{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
}

.card-stars{
    /* border: 1px solid white; */
    display: flex;
    width: 30%;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 5px;
}

/* gap: 5px; */



//background: url(druids 6.png);
/* FADE */



`

export const ImageContainer = styled.div`
/* border: 1px solid black; */
width: 100%;
/* width: 292px; */
height: 265px;
border-radius: inherit;

.bnb-image{
    border-radius: inherit;
    /* object-fit: fill; */
    width: 100%;
    height: 100%;
   
    /* margin: 0 auto; */
}

`