/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Envelope, Lock } from 'phosphor-react';
import { TextInput, TextInputRootProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="write your email" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },

} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const Password: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Lock />
      </TextInput.Icon>,
      <TextInput.Input placeholder="write your password" />,
    ],
  },
};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Input placeholder="write anything" />,
    ],
  },
};
