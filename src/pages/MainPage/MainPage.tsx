import './MainPage.css'
import {SendMessageForm} from "../../components/SendMessageForm/SendMessageForm";
import {observer} from "mobx-react-lite";
import UrlStore from "../../stores/UrlStore";
import {UrlBox} from "../../components/UrlBox/UrlBox";

export const MainPage = observer(() => {
  return (
    <div className="main-page">
      <div className="form-container">
        {UrlStore.uri ? <UrlBox/> : <SendMessageForm/>}
      </div>
    </div>
  )
});
