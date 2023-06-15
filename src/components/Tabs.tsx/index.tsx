import { useState } from 'react';
import styled from 'styled-components';
import type React from 'react';
import { TabNavItem } from 'components/Tabs.tsx/components/TabNavItem';

export interface TabItem {
  label: string;
  content: React.ReactElement;
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabList: TabItem[];
}

/**
 * 탭 메뉴 컴포넌트
 */
export const Tabs: React.FC<TabsProps> = ({ tabList, ...rest }) => {
  const [activeTab, setActiveTab] = useState(0);

  const onClickItem = (index: number) => {
    setActiveTab(index);
  };

  const tabNavItemList = tabList.map(
    (item, index): React.ReactElement => (
      <TabNavItem
        key={item.label}
        index={index}
        text={item.label}
        activeTab={activeTab}
        onClick={() => onClickItem(index)}
      />
    ),
  );

  return (
    <Wrap {...rest}>
      <TabContainer>{tabNavItemList}</TabContainer>
      {tabList[activeTab].content}
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 6rem;
`;

const TabContainer = styled.ul`
  display: flex;
  height: 100%;

  box-shadow: inset 0px -0.3rem 0px #e6e6e6;

  /* background-color: yellow; */
`;
