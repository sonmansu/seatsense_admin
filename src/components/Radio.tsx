import { forwardRef } from 'react';
import styled from 'styled-components/macro';
import type { Ref } from 'react';

interface RadioProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string; // radio group 내에서 동일한 이름 사용해야함
  value: string;
  label: string;
}

/**
 * radio input 컴포넌트 (회원가입 페이지에서 사용)
 */
export const Radio = forwardRef(
  (
    { id, name, value, label, ...rest }: RadioProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <Label htmlFor={id}>
        <RadioInput
          type='radio'
          id={id}
          name={name}
          value={value}
          ref={ref}
          {...rest}
        />
        <LabelText>{label}</LabelText>
      </Label>
    );
  },
);

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  /* background-color: aqua; */
`;

const LabelText = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.palette.grey[400]};
  margin-left: 1.6rem;
`;

const RadioInput = styled.input`
  &[type='radio'] {
    appearance: none;

    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    border: 0.15rem solid ${({ theme }) => theme.palette.grey[200]};
    background-color: ${({ theme }) => theme.palette.grey[50]};

    transition: border 0.2s ease-in-out;
  }
  &[type='radio']:checked {
    width: 2.4rem;
    height: 2.4rem;
    outline: 0.3rem solid ${({ theme }) => theme.palette.primary.orange};
    border: 0.3rem solid white;
    background-color: ${({ theme }) => theme.palette.primary.orange};
    margin: 0.3rem;
  }

  &[type='radio']:hover {
    filter: brightness(95%);
    cursor: pointer;
  }
  &[type='radio']:hover + span {
    cursor: pointer;
  }
`;
