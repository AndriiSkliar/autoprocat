import styled from 'styled-components';

export const Main = styled.main`
    padding: 150px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledBtnLoadMore = styled.button`
    border: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px; 
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #3470ff;
    background-color: transparent;
    transition: color var(--transition);

    &:hover,
    &:focus {
    color: #0b44cd;
  }
`;