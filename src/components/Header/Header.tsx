import './Header.css'
import {MessageOutlined} from "@ant-design/icons";
import {Button} from "antd";

export const Header = () => {
  return (
    <header className="app-header">
      <div className="header-root">
        <div className="left-header-block">
          <MessageOutlined style={{
            fontSize: '35px',
            paddingRight: '15px',
          }}/>
          <span className="logo-text">SAY HI YOUR FRIEND!</span>
        </div>
        <div className="right-header-block">
          <Button type={"default"}>Отправить</Button>
        </div>
      </div>
    </header>
  )
}
