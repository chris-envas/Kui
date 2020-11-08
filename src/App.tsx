import React from 'react';
import "./style/index.scss"
import Button, { ButtonType, ButtonSize} from "./component/Button/button"

function App() {
  return (
    <div className="App">
      <Button 
        btnType={ButtonType.Primary}
        autoFocus
        onClick={(e) => {
          alert(e.target)
        }}
      >normal button</Button>
      <Button
        size={ButtonSize.Large}
        disabled
      >
          large and primary of button
        </Button>
      <Button
         btnType={ButtonType.Link}
         href="https://www.baidu.com"
      >
        link of button
      </Button>
    </div>
  );
}

export default App;
