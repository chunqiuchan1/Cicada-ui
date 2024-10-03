import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => <Input {...args} />,
};

export const ADefault: Story = {
  ...Template,
  args: {
    placeholder: '漂亮的 Input',
  },
  name: '默认的 Input',
};

export const BDisabled: Story = {
  ...Template,
  args: {
    placeholder: 'disabled input',
    disabled: true,
  },
  name: '被禁用的 Input',
};

export const CIcon: Story = {
  ...Template,
  args: {
    placeholder: 'input with icon',
    icon: 'search',
  },
  name: '带图标的 Input',
};

export const DSizeInput: Story = {
  render: () => (
    <>
      <Input defaultValue="large size" size="lg" />
      <Input placeholder="small size" size="sm" />
    </>
  ),
  name: '大小不同的 Input',
};

export const EPandInput: Story = {
  render: () => (
    <>
      <Input defaultValue="prepend text" prepend="https://" />
      <Input defaultValue="google" append=".com" />
    </>
  ),
  name: '带前后缀的 Input',
};