import styled from 'styled-components'
import {listensPropsColor, listensPropsSpace, listensPropsPosition, listensPropsShadow, listensPropsSize, listensPropsTypography} from "@uxu/props-styled-system";

export const ComponentBox = styled.div`
  ${listensPropsColor};
  ${listensPropsSpace};
  ${listensPropsPosition};
  ${listensPropsShadow};
  ${listensPropsSize};
  ${listensPropsTypography}
`;
