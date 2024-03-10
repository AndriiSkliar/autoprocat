import { StyledDivHero, StyledItemHero, StyledListHero, StyledHeroContainer, StyledTitleHero } from './Hero.styled';

const Hero = () => {
  return (
      <StyledHeroContainer>
          <StyledDivHero>
              <StyledTitleHero>Daily car rental in Ukraine</StyledTitleHero>
              <StyledListHero>
                <StyledItemHero>36 cars in the fleet</StyledItemHero>
                <StyledItemHero>Full insurance coverage</StyledItemHero>
                <StyledItemHero>Round-the-clock support 24 /7</StyledItemHero>
              </StyledListHero>
          </StyledDivHero>
      </StyledHeroContainer>
  );
};

export default Hero;
