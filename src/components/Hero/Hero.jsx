import { StyledDivHero, StyledItemHero, StyledListHero, StyledHeroContainer, StyledTitleHero, StyledIconPawA, StyledIconPawB, StyledIconPawC, StyledIconPawD } from './Hero.styled';

const Hero = () => {
  return (
      <StyledHeroContainer>
          <StyledDivHero>
              <StyledIconPawA />
              <StyledIconPawB />
              <StyledIconPawC />
              <StyledIconPawD />
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
