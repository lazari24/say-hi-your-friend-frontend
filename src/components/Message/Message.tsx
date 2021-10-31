import {Message as MessageType} from "../../stores/Message";
import {observer} from "mobx-react-lite";
import {Button, Modal, Spin} from "antd";

type Props = {
  data: MessageType
}

const Message = ({data} : Props) => {
  const showNotificationModal = () => {
    Modal.info({
      title: `${data.data?.friendName}, You have a message from ${data.data?.name}`,
      content: `Your message: ${data.data?.message}`,
    })
  }

  return (
    <div>
      {data.isLoading ? <Spin/> : <Button onClick={showNotificationModal}>View Message</Button>}
    </div>
  );
};

export default observer(Message);
