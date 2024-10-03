import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Upload } from './upload';
import Button from '../Button/button';
import Icon from '../icon/icon';

const meta: Meta<typeof Upload> = {
  title: 'Upload',
  component: Upload,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: "dynamic",
        language: "tsx",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ASimpleUpload: Story = {
  render: (args) => (
    <Upload
      {...args}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    >
      <Button size="lg" btnType="primary"><Icon icon="upload" /> 点击上传 </Button>
    </Upload>
  ),
  name: '普通的 Upload 组件',
};

export const BCheckUpload: Story = {
  render: (args) => {
    const checkFileSize = (file: File) => {
      if (Math.round(file.size / 1024) > 50) {
        alert('file too big');
        return false;
      }
      return true;
    };

    return (
      <Upload
        {...args}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={checkFileSize}
      >
        <Button size="lg" btnType="primary"><Icon icon="upload" /> 不能传大于50Kb！ </Button>
      </Upload>
    );
  },
  name: '上传前检查文件大小',
};

export const CDragUpload: Story = {
  render: (args) => (
    <Upload
      {...args}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      name="fileName"
      multiple
      drag
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br />
      <p>点击或者拖动到此区域进行上传</p>
    </Upload>
  ),
  name: '拖动上传',
};
