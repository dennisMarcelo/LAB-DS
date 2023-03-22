import React from 'react';

interface ButtonProps {
  text: string
}

function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      className="custom-buttom"
    >
      {props.text ?? 'default text'}
    </button>
  );
}

export function App() {
  return (
    <>
      <div>Inital Page</div>
      <Button text="My first button" />
    </>
  );
}
