import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu'
import Icon from './components/icon/icon';
import Transition from './components/Transition/transition';
import { Input } from './components/Input/input';
//import { AutoComplete } from './components/AutoComplete/autoComplete';


library.add(fas)




function App() {
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState('')
  const postData = {
    title: "my title",
    body: "hello man"
  }
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(resp => {
        console.log(resp)
        setTitle(resp.data.title)
      })
  })
  return (
    <div className="App">
      <header className="App-header">

        <Menu defaultIndex="0" onSelect={(index) => { alert(index) }} defaultOpenSubMenus={['2']}>
          <MenuItem>cool link1</MenuItem>
          <MenuItem disabled>cool link2</MenuItem>
          <SubMenu title='dropdown' >
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
            <MenuItem>
              dropdown 3
            </MenuItem>
          </SubMenu>
          <MenuItem>cool link3</MenuItem>
        </Menu>
        <Button size="lg" onClick={() => { setShow(!show) }}>Toggle</Button>
        <Transition
          in={show}
          timeout={300}
          animation='zoom-in-left'
          wrapper
        >
          <Button > Hello</Button>
          <Button disabled>Dissabled Button</Button>
          <Button btnType="primary" size="lg">large</Button>
          <Button btnType="danger" size="sm">Small Danger</Button>
          <Button btnType="link" href="http://www.baidu.com">baidu link</Button>
          <Button btnType="link" href='http://www.baidu.com' disabled>   baidu link</Button>


        </Transition>
        <Input defaultValue="large size" size="lg" />
        <Input placeholder="small size" size="sm" />
        <Input defaultValue="prepend text" prepend="https://" />
        <Input defaultValue="google" append=".com" />



      </header>
    </div>
  );
}

export default App;
