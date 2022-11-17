import {ColStyle} from './commponent.flex.col.style';
import {FunctionComponentDiv, MarkAsNumberNotRequired} from '@uxu/types';
import {Breakpoints} from 'theme';
import React, {FC} from 'react';
import {color} from '../../../../../../../props-styled-system/src/index'

export const Col: FC<FunctionComponentDiv & MarkAsNumberNotRequired<Breakpoints>> = ({children, ...cols}, props) => {

  return (
    <ColStyle {...props} {...cols} cols={cols} color="red">
      {children}
    </ColStyle>
  )
};
