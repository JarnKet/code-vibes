import React from 'react';

const Button = ({ text, onClickFunction, classStyle, typeBtn }) => {
  return (
    <button
      type={typeBtn}
      className={`${classStyle}  rounded-lg bg-neutral-900 p-2 text-center font-jetMono font-semibold text-white shadow-lg hover:font-extrabold dark:bg-white dark:text-neutral-900`}
      onClick={onClickFunction}
    >
      {text}
    </button>
  );
};

export default Button;
