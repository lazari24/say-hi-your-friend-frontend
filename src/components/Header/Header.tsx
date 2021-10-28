import './Header.css'
import {MessageOutlined, GithubOutlined, LinkedinOutlined} from "@ant-design/icons";
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <header className="app-header">
      <div className="header-root">
        <div className="left-header-block">
          <Link to="/">
              <MessageOutlined style={{
                fontSize: '35px',
                paddingRight: '15px',
              }}/>
              <span className="logo-text">SAY HI YOUR FRIEND!</span>
          </Link>
        </div>
        <div className="right-header-block">
          <div className="icon-container-right">
            <a href="https://github.com/lazari24" target="_blank" rel="noreferrer">
              <GithubOutlined/>
            </a>
          </div>
          <div className="icon-container-right">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <LinkedinOutlined />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
