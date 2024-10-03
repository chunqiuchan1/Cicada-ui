import type { Meta, StoryObj } from '@storybook/react';
import Menu from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

const meta: Meta<typeof Menu> = {
  title: 'Example/Menu',
  component: Menu,
  /* tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  }, */
};

export default meta;
type Story = StoryObj<typeof meta>;

// 默认 Menu
export const DefaultMenu: Story = {
  render: () => (
    <Menu defaultIndex='0' onSelect={(index) => { alert(index + 1) }} defaultOpenSubMenus={['2']}>
      <MenuItem>cool link 1</MenuItem>
      <MenuItem>cool link 2</MenuItem>
      <SubMenu title="鼠标移动向下拉选项">
        <MenuItem>下拉选项一</MenuItem>
        <MenuItem>下拉选项二</MenuItem>
      </SubMenu>
      <MenuItem disabled>cool link3</MenuItem>
    </Menu>
  ),
  name: '默认 Menu',
};

// 纵向 Menu
export const VerticalMenu: Story = {
  render: () => (
    <Menu defaultIndex='0' onSelect={(index) => { alert(index + 1) }} defaultOpenSubMenus={['2']} mode="vertical">
      <MenuItem>cool link 1</MenuItem>
      <MenuItem>cool link 2</MenuItem>
      <SubMenu title="鼠标移动向下拉选项">
        <MenuItem>下拉选项一</MenuItem>
        <MenuItem>下拉选项二</MenuItem>
      </SubMenu>
      <MenuItem disabled>cool link3</MenuItem>
    </Menu>
  ),
  name: '纵向 Menu',
};

// 默认展开的纵向 Menu
export const OpenedMenu: Story = {
  render: () => (
    <Menu defaultIndex='0' onSelect={(index) => { alert(index + 1) }} defaultOpenSubMenus={['2']} mode="horizontal">
      <MenuItem>cool link 1</MenuItem>
      <MenuItem>cool link 2</MenuItem>
      <SubMenu title="点击下拉选项">
        <MenuItem>下拉选项一</MenuItem>
        <MenuItem>下拉选项二</MenuItem>
      </SubMenu>
      <MenuItem disabled>cool link3</MenuItem>
    </Menu>
  ),
  name: '横向 Menu',
};
