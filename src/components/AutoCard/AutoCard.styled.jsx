import styled from 'styled-components';

export const StyledItemWrapper = styled.li`
    width: calc((100% - (3 * 29px)) / 4);
`;

export const StyledImgWrapper = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 14px;
    width: 274px;
    height: 268px;
    object-fit: cover;
    background: 
    linear-gradient(180deg, rgba(18, 20, 23, 0.5) 0%, rgba(18, 20, 23, 0.5) 100%),
    #f3f3f2;
    margin-bottom: 14px;

    .autoImg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const StyledButtonWrapper = styled.div`
    position: absolute;
    top: 16px;
    right: 15px; 
    z-index: 1;
`;

export const StyledTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;

export const StyledTitle = styled.h2`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: var(--second-color);
`;

export const StyledTitleAccent = styled.span`
    color: #3470ff;
`;

export const StyledSpan = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: var(--second-color);
`;

export const StyledCountryList = styled.ul`
    display: flex;
    gap: 6px;
    margin-bottom: 4px;
`;

export const StyledCountryItem = styled.li`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);

    &:last-child {
        border-right: none;
        padding-right: 0;
    }
`;

export const SpecificStyledCountryList = styled(StyledCountryList)`
  margin-bottom: 28px;
`;

export const StyledBtnLearnMore = styled.button`
    border-radius: 12px;
    width: 100%;
    padding: 12px 0;
    background: #3470ff;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px; 
    color: var(--background-color);
    display: flex;
    justify-content: center;
    align-content: center;
    border: 0;
    transition: background-color var(--transition);

    &:hover,
    &:focus {
    background-color: #0b44cd;
  }
`;