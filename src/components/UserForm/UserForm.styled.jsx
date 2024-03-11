import { Form } from 'formik';
import styled from 'styled-components';
import { ReactComponent as IconArrow } from 'assets/icons/arrow.svg'

export const StyledForm = styled(Form)`
    display: flex;
    gap: 18px;
    align-items: end;
`;

export const StyledFormDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const StyledArrowDiv = styled.div`
    position: relative;
`;

export const StyledLabel = styled.label`
    font-weight: 500;
    font-size: 14px; 
    line-height: 18px; 
`;

export const StyledSelect = styled.select`
    cursor: pointer;
    appearance: none;
    border: 0;
    margin: 0;
    padding: 14px 73px 14px 18px;
    background-color: #F7F7FB;
    color: var(--second-color);
    border-radius: 14px;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;

    .option {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: rgba(18, 20, 23, 0.2);
  }
`;

export const StyledIconArrow = styled(IconArrow)`
  position: absolute;
  top: 50%;
  right: 18px; 
  transform: translateY(-50%);
  pointer-events: none;
`;

export const StyledInputsWrapper = styled.div`
    display: flex;
`;

export const StyledInputWrapper = styled.div`
    position: relative;

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .input {
    border: 0;
    background-color: #f7f7fb;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px; 
    color: var(--second-color);
    padding: 14px 24px;
    width: 160px;
  }

  &:first-child .input:first-of-type {
        padding-left: 70px;
        border-right: 1px solid rgba(138, 138, 137, 0.2);
        border-radius: 14px 0 0 14px;
    }

  &:last-child .input:first-of-type {
        padding-left: 49px;
        border-radius: 0 14px 14px 0;
    }

  .span{
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 24px;
  }
`;

export const StyledButton = styled.button`
    border: 0;
    border-radius: 12px;
    background-color: #3470ff;
    height: 48px;
    width: 136px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.42857;
    color: var(--background-color);
    transition: background-color var(--transition);

    &:hover,
    &:focus {
    background-color: #0b44cd;
    }
`;
