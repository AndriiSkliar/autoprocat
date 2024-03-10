import styled from 'styled-components';

export const StyledHeroContainer = styled.div`
    width: 1184px;
    height: calc(100vh - 100px);
    background: linear-gradient(rgba(17, 17, 17, 0), rgba(17, 17, 17, 0.4));
    `;

export const StyledDivHero = styled.div`
    padding: 0 30px;
`;

export const StyledTitleHero = styled.h2`
    padding: 60px 0 60px;
    letter-spacing: -0.03em;
    font-weight: 500;
    font-size: 55px;
    line-height: 1.5;
    color: var(--second-color);
    text-align: center;
`;

export const StyledListHero = styled.ul`
    padding-left: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const StyledItemHero = styled.li`
    font-weight: 500;
    font-size: 25px;
    line-height: 1.5;
    color: var(--second-color);
`;
