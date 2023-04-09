import styled from 'styled-components';
import { listensPropsBorder, listensPropsSize } from './../../../utils';


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--uxu-color-primary-accent2);
  ${listensPropsSize};
  ${listensPropsBorder};
`;
