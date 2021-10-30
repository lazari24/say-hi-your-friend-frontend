import UrlStore from "../../stores/UrlStore";
import {observer} from "mobx-react-lite";
import {Input, message} from "antd";
import {CopyOutlined} from "@ant-design/icons";

export const UrlBox = observer(() => {
  return (
    <div className="url-input-container">
      <Input style={{width: "340px"}} defaultValue={UrlStore.uri} addonAfter={<CopyOutlined onClick={() => {
        navigator.clipboard.writeText(UrlStore.uri);
        message.success("Copied!");
      }}/>}/>
    </div>
  );
});
