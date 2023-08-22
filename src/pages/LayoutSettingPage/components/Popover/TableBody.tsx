import styled from 'styled-components/macro';
import { CircledArrowButton } from 'components/CircledArrowButton';
import { TABLE_POPOVER_BODY_WIDTH_REM } from 'pages/LayoutSettingPage/utils/constants';

interface TableBodyProps {
  width?: number;
  height?: number;
}

/**
 * 테이블 클릭했을 때의 팝오버 바디 영역
 */
export const TableBody: React.FC<TableBodyProps> = ({ width, height }) => {
  return (
    <Wrap>
      <Row>
        <Label>가로 길이</Label>
        <CircledArrowButton direction='LEFT' />
        <Input placeholder='' value={width} />
        <CircledArrowButton direction='RIGHT' />
      </Row>
      <Row>
        <Label>세로 길이</Label>
        <CircledArrowButton direction='LEFT' />
        <Input placeholder='' value={height} />
        <CircledArrowButton direction='RIGHT' />
      </Row>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: ${TABLE_POPOVER_BODY_WIDTH_REM}rem;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1.2rem;

  & + & {
    margin-top: 1.2rem;
  }
`;

const Label = styled.span`
  color: white;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
`;

const Input = styled.input`
  width: 4rem;
  padding: 0.4rem 0;

  background-color: ${({ theme }) => theme.palette.grey[50]};
  text-align: center;

  color: ${({ theme }) => theme.palette.grey[500]};
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
`;
