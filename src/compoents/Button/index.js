import React from 'react';

import { Button } from 'antd';

export default function Buttons({ text, type, size }) {
  return (
    <Button block={true} type={type} size={size}>
      {text}
    </Button>
  );
}
