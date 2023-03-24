// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex items-center gap-2">
        {Story()}
        <Text size="sm" asChild={false}>Lembrar de mim por 30 dias</Text>
      </div>
    ),
  ],

} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
