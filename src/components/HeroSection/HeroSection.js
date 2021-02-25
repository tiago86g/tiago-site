import React from 'react';
import { SomeIcons } from '../../components';
import { homeOjbOne } from '../../pages/HomePage/Data';
import { Container } from '../../theme/globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Subtitle,
  Heading,
  Description,
  ImgWrapper,
  Img,
} from './HeroSection.elements';

const HeroSection = ({
  lightBg,
  imgStart,
  lightSubtitle,
  lightText,
  lightTextDesc,
  subtitle,
  headLine,
  headLine2,
  description,
  start,
  img,
  alt,
  rounded,
  border,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img
                  src={img}
                  alt={alt}
                  rounded={rounded}
                  border={border}
                ></Img>
              </ImgWrapper>
            </InfoColumn>
            <InfoColumn>
              <TextWrapper>
                <Subtitle lightSubtitle={lightSubtitle}>{subtitle}</Subtitle>
                <Heading lightText={lightText}>
                  {headLine}
                  <strong>{headLine2}</strong>
                </Heading>
                <Description lightTextDesc={lightTextDesc}>
                  {/* {description} */}
                  Brazilian developer with 10 years of experience as a graphic
                  designer, so I’m looking for projects where both skills come
                  into play.
                </Description>
                <Description>
                  I am proficient within <strong>React</strong> (HTML, CSS, JS)
                  and I have a solid knowledge of <strong>Rest API</strong>{' '}
                  using Node.js, Express , MySql (Knex.js). With a background as
                  a designer, I am also highly skilled in{' '}
                  <strong>quickly mock-up ideas</strong> and I also have vast
                  experience designing art exhibitions and catalogues.
                </Description>
                <SomeIcons someList={homeOjbOne.someList} />
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default HeroSection;
