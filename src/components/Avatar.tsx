import React from 'react';
import styled, { css } from 'styled-components';
import { Size } from '../types'

interface AvatarProps {
  name: string
  url: string
  size?: Size
}

const Avatar: React.FC<AvatarProps> = ({ name, url, size = 'small' }) => {
  return (
    <AvatarContainer size={size}>
      <AvatarImage src={url} alt={name} />
    </AvatarContainer>
  );
};

export default Avatar;

interface AvatarContainerProps {
  size: Size
}

const sizeStyles = {
  small: css`
    width: 32px;
    height: 32px;
  `,
  medium: css`
    width: 42px;
    height: 42px;
  `,
  large: css`
    width: 52px;
    height: 52px;
  `,
}

const AvatarContainer = styled.div<AvatarContainerProps>`
  ${({ size }) => sizeStyles[size]}
  border: 2px solid #ddd;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
