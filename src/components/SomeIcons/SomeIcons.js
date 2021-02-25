import React from 'react';
import { SomeIconsWrap, SomeItem, Background } from './SomeIcons.elements';
const SomeIcons = ({ someList }) => {
  return (
    <SomeIconsWrap>
      {someList.map(({ someName, link, iconName }) => {
        return (
          <SomeItem
            key={someName}
            href={link}
            target="_blank"
            aria-label={someName}
            alt={someName}
          >
            <Background>{iconName}</Background>
          </SomeItem>
        );
      })}
    </SomeIconsWrap>
  );
};

export default SomeIcons;
