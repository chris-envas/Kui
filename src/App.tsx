import React from 'react';
import "./style/index.scss"
import Button from "./component/Button/button"
import Menu from "./component/Menu/menu"
import MenuItem from "./component/Menu/menuItem"
import SubMenu from "./component/Menu/subMenu"

import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Icon from "./component/Icon/icon"

import Editor, { EditorContext } from "./component/Editor/editor"

import Clock from "./component/Clock/clock"

library.add(fas)

function App() {
  return (
    <div className="App">
      {/* <Clock /> */}
      <Menu 
        defaultIndex={'1'} 
        onSelect={(index) => {
          alert(index)
        }}
        // mode="vertical"
        // defaultOpenSubMenus={["3"]}
      >
        <MenuItem disabled>disabled item</MenuItem>
        <MenuItem>actived item</MenuItem>
        <MenuItem>normal item</MenuItem>
        <SubMenu title="sub menu">
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
        </SubMenu>
      </Menu>
      <hr />
      <Button 
        // btnType={ButtonType.Primary}
        style={{background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}}
        autoFocus
        onClick={(e) => {
          alert(e.target)
        }}
      >normal button</Button>
      <Button
        size="lg"
        disabled
      >
          large and primary of button
        </Button>
      <Button
         btnType="link"
         href="https://www.baidu.com"
      >
        link of button
      </Button>
      <hr />
      <Editor />
      <Button onClick={() => {
        console.log(EditorContext.txt.html())
      }}>click me</Button>
    </div>
  );
}

export default App;
