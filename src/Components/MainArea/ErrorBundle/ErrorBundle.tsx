import React from 'react';
import MyButton from '../../UI/MyButton/MyButton';

function ErrorBundle(props: { badRequest: (args: unknown) => Promise<void> }) {
  return (
    <MyButton
      onClick={() => {
        props.badRequest('Very bad request');
        throw new Error('My bad request');
      }}
    >
      Error
    </MyButton>
  );
}

export default ErrorBundle;
