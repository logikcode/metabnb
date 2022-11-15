import React from 'react';

import MetaBnBCard from './MetaBnBCard';
import MetaHeader from './MetaHeader';
import { PageStyled, BodySection, Heading, BodyContent, GridContainer } from './MetaPageStyled';
import BnbImage1 from "../assets/images/BnbImage1.svg";
import BnbImage2 from "../assets/images/BnbImage2.svg";
import BnbImage3 from "../assets/images/BnbImage3.svg";
import BnbImage4 from "../assets/images/BnbImage4.svg";
import BnbImage5 from "../assets/images/BnbImage5.svg";
import BnbImage6 from "../assets/images/BnbImage6.svg";
import BnbImage7 from "../assets/images/BnbImage1.svg";
import BnbImage8 from "../assets/images/BnbImage1.svg";
import BnbImage11 from "../assets/images/BnbImage11.png"
function MetaPage() {

    const images = {};

  return (
    <PageStyled>
        <MetaHeader />
        <BodySection>
        <Heading>
            <h1 className="heading-text"> Inspiration for your next adventure</h1>
        </Heading>
        <BodyContent>
            <GridContainer>
                <MetaBnBCard image={BnbImage1}/>
                <MetaBnBCard image={BnbImage2} />
                <MetaBnBCard image={BnbImage3}/>
                <MetaBnBCard image={BnbImage4}/>
            </GridContainer>

            <GridContainer>
                <MetaBnBCard image={BnbImage5}/>
                <MetaBnBCard image={BnbImage6}/>
                <MetaBnBCard image={BnbImage7}/>
                <MetaBnBCard image={BnbImage8}/>
            </GridContainer>

        </BodyContent>
            
        </BodySection>
    </PageStyled>
  )
}

export default MetaPage