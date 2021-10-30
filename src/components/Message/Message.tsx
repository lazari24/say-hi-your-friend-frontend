import {Message as MessageType} from "../../stores/Message";
import {observer} from "mobx-react-lite";
import {Spin} from "antd";

type Props = {
  data: MessageType
}

const Message = ({data} : Props) => {
  return (
    <div>
      {data.isLoading ? <Spin/> : data.data?.message}
    </div>
  );
};

export default observer(Message);
