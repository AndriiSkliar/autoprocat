import styled from 'styled-components';
import { ReactComponent as IconDefaultAuto } from 'assets/icons/default-auto.svg'

export const StyledNoWrapper = styled.div`
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledNoText = styled.p`
    font-weight: 500;
    font-size: 25px;
    line-height: 1.5;
    color: var(--second-color);
`;

export const StyledNoIcon = styled(IconDefaultAuto)`
    font-weight: 500;
    font-size: 25px;
    line-height: 1.5;
    color: var(--second-color);
    max-width: 250px;
`;