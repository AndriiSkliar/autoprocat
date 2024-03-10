import styled from 'styled-components';
import { ReactComponent as IconPaw } from 'assets/icons/paw.svg'

export const StyledHeroContainer = styled.div`
    width: 1184px;
    height: calc(100vh - 100px);
    background: linear-gradient(rgba(17, 17, 17, 0), rgba(17, 17, 17, 0.4));
    `;

export const StyledDivHero = styled.div`
    padding: 0 30px;
    position: relative;
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

export const StyledIconPawA = styled(IconPaw)`
    position: absolute;
    bottom: -180px;
    right: 200px; 
    transform: translateY(-50%) rotate(30deg);
`;

export const StyledIconPawB= styled(IconPaw)`
    position: absolute;
    bottom: -160px;
    right: 100px; 
    transform: translateY(-50%) rotate(30deg);
`;

export const StyledIconPawC= styled(IconPaw)`
    position: absolute;
    bottom: -80px;
    right: 150px; 
    transform: translateY(-50%) rotate(30deg);
`;

export const StyledIconPawD= styled(IconPaw)`
    position: absolute;
    bottom: -70px;
    right: 40px; 
    transform: translateY(-50%) rotate(30deg);
`;
