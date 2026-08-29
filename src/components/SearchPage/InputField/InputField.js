import React from 'react';
import * as styles from './InputField.module.css';
import cn from 'classnames';

const InputField = ({ className: classNameProp, ...props }) => {
  const className = cn(classNameProp, styles.inputField);

  return <input type="search" className={className} {...props} />;
};

export default InputField;
