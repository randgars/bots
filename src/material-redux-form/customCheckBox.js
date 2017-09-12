import React from 'react';
import { Checkbox } from 'material-ui';

const customCheckBox = ({ input, label }) => (
  <Checkbox label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}/>
)

export default customCheckBox;