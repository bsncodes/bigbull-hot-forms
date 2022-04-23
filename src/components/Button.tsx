import styled from 'styled-components';

export default function getButton(style: string = '') {
  return styled.button`
    ${style}
  `;
}
