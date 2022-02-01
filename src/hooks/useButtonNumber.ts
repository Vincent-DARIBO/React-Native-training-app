import React from 'react';

export default function useButtonNumber() {
  const [buttonNumber, setButtonNumber] = React.useState(1);
  return { buttonNumber, setButtonNumber };
}
