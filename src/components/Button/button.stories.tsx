import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';


const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: "^on.*" },
    docs: {
      source: {
        type: "dyamic",
        language: "tsx",
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => { alert("谢谢使用") },
    children: 'Button',
  },
  name: "默认 Button",
  argTypes: {
    disabled: {
      control: { control: "false" },
      btnType: { btnType: "false" }
    }
  },
  parameters: {
    docs: {
      source: {
        code: `<Button onClick={() => alert("谢谢使用")}>Button</Button>`,
        type: "code",
      }
    }
  }
};

export const Size: Story = {
  render: () => (
    <>
      <Button size="lg">Large Button</Button>
      <Button size="sm">Small Button</Button>
    </>
  ),
  name: "不同尺寸的Button",
  argTypes: {
    disabled: {
      description: "是否设置不可用",
    },
    btnType: {
      description: "选择按钮类型"
    }
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Button size="lg">Large Button</Button>
        <Button size="sm">Small Button</Button>
        `,
        type: "code",
      },
    },
  },
};

export const Type: Story = {
  render: () => (
    <>
      <Button btnType="primary">Primary Button</Button>
      <Button btnType="danger">Danger Button</Button>
      <Button btnType="link" href="https://google.com">Link Button</Button>
    </>
  ),
  name: "不同类型的Button",
  argTypes: {
    disabled: {
      description: "是否设置不可用",
    },
    btnType: {
      description: "选择按钮类型"
    }
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Button btnType="primary">Primary Button</Button>
        <Button btnType="danger">Danger Button</Button>
        <Button btnType="link" href="https://google.com">Link Button</Button>
        `,
        type: "code",
      },
    },
  },
};
