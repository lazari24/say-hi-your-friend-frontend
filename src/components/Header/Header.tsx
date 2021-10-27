import './Header.css'
import {MessageOutlined, GithubOutlined, LinkedinOutlined} from "@ant-design/icons";

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
          <div className="icon-container-right"><GithubOutlined/></div>
          <div className="icon-container-right"><LinkedinOutlined /></div>
        </div>
      </div>
    </header>
  )
}
