import styled from 'styled-components';

export const StyledPopUp = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(18, 20, 23, 0.5);
  &:hover {
    cursor: pointer;
  }

  .popUp {
    position: relative;
    border-radius: 24px;
    padding: 40px;
    background-color: var(--background-color);
    max-width: 541px;
    width: 100%;
    min-height: 752px;
    overflow-y: scroll;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    &:hover {
      cursor: auto;
    }
  }

  .closeBtn {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 0;
    border: 0;
    background-color: transparent;
  }
`;

export const StyledImgPopWrapper = styled.div`
    overflow: hidden;
    object-fit: cover;
    border-radius: 14px;
    width: 461px;
    height: 248px;
    background: #f3f3f2;
    margin-bottom: 14px;

    .autoPopImg{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`;

export const StyledTitleWrapper = styled.div`
    margin-bottom: 8px;
`;

export const StyledTitlePop = styled.h2`
    font-weight: 500;
    font-size: 18px;
    line-height: 24px; 
    color: var(--second-color);
`;

export const StyledTitleAccentPop = styled.span`
    color: #3470ff;
`;

export const StyledTextDesc = styled.p`
  margin: 10px 0 24px;
  font-weight: 400;
  font-size: 14px; 
  line-height: 20px;
  color: var(--second-color);
`;

export const StyledTitleFunc = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--second-color);
  margin-bottom: 8px;
`;

export const AdditionalStyledTitleFunc = styled(StyledTitleFunc)`
  margin-top: 24px;
`;

export const ConditionsListPop = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-family: var(--second-family);
  margin-bottom: 24px;
`;

export const ConditionsListItem = styled.li`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #363535;
  border-radius: 35px;
  padding: 7px 14px;
  background: #f9f9f9;
`;

export const BeforeColon = styled.span`
  font-weight: 400;
`;

export const AfterColon = styled.span`
  font-weight: 600;
  color: #3470ff;
`;

export const PhoneLink = styled.a`
  border-radius: 12px;
  padding: 12px 50px;
  background: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--background-color);
`;
