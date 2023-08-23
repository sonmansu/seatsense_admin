import { forwardRef, useState } from 'react';
import styled from 'styled-components/macro';
import type { ComponentPropsWithRef } from 'react';
import { Popover } from 'pages/LayoutSettingPage/components/Popover';
import { useLayoutActions } from 'pages/LayoutSettingPage/stores/layoutStore';
import {
  CHAIR_BORDER_PX,
  CHAIR_SIZE_PX,
} from 'pages/LayoutSettingPage/utils/constants';
import { flexSet } from 'styles/mixin';

interface ChairItemProps extends ComponentPropsWithRef<'div'> {
  isClickable: boolean;
  id: string;
  // setIsPopoverOpen: any;
  isPopoverOpen: boolean;
  onClick: () => void;
}

export const ChairItem = forwardRef<HTMLDivElement, ChairItemProps>(
  ({ isClickable, id, isPopoverOpen, onClick, ...rest }, ref) => {
    const { getItem } = useLayoutActions();

    const manageId = getItem(id)?.manageId;

    const popoverPosition =
      (ref && typeof ref !== 'function' && ref.current?.style.transform) || '';

    return (
      <>
        <ChairBorder {...rest} ref={ref} onClick={onClick}>
          <Chair isClickable={isClickable}>
            <Number>{manageId}</Number>
          </Chair>
        </ChairBorder>
        {(isPopoverOpen || !manageId) && (
          <Popover transform={popoverPosition} onClose={onClick}>
            {/* <ChairBody /> */}
          </Popover>
        )}
      </>
    );
  },
);

// 의자 바깥에 투명한 테두리를 넣기 위함
export const ChairBorder = styled.div`
  ${flexSet()}
`;

// 검정 테두리를 준 의자 영역
export const Chair = styled.div<{ isClickable: boolean }>`
  ${flexSet()}
  background-color: ${(props): string => props.theme.palette.grey[100]};

  width: ${CHAIR_SIZE_PX - CHAIR_BORDER_PX}px;
  height: ${CHAIR_SIZE_PX - CHAIR_BORDER_PX}px;

  border: ${CHAIR_BORDER_PX}px solid ${({ theme }) => theme.palette.black.main};
  border-radius: 50%;

  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};

  div {
    font-size: 5px;
    color: red;
  }
`;

const Number = styled.span`
  color: ${({ theme }) => theme.palette.grey[400]};
  font-size: 0.9rem;
  font-weight: 400;
  line-height: normal;
`;
