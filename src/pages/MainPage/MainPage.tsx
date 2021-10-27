import './MainPage.css'
import {SendMessageForm} from "../../components/SendMessageForm/SendMessageForm";

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="form-container">
        <SendMessageForm/>
      </div>
    </div>
  )
}
