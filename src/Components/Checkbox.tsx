import React from 'react';
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends CheckboxRadix.CheckboxProps {
}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxRadix.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}>
      <CheckboxRadix.CheckboxIndicator>
        <Check weight="bold" className="h5 w-5 text-cyan-500" />
      </CheckboxRadix.CheckboxIndicator>
    </CheckboxRadix.Root>
  );
}

Checkbox.defaultProps = {

};
