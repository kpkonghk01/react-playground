import { Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { AbsoluteCenter } from './css/AbsoluteCenter';
import { FlexCenter } from './css/FlexCenter';
import FullParentWrapper from './wrappers/FullParentWrapper';

type SpinSizes = 'large' | 'small' | 'default' | undefined;

const SpinWrapper = styled(FullParentWrapper)`
  ${FlexCenter}
  ${AbsoluteCenter}
  background-color: #fff;
  opacity: 0.6;
`;

export const FullParentSpinner = ({ size = 'large' }: { size?: SpinSizes }) => (
  <SpinWrapper>
    <Spin size={size} />
  </SpinWrapper>
);
