import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Message as MessageType} from "../../stores/Message";
import Message from "../../components/Message/Message";

interface RouterProps {
  id: string
}

export const CurrentMessagePage = observer(() => {
  const {id} = useParams<RouterProps>()
  const msg = new MessageType(id);

  return (
    <div>
      <Message data={msg}/>
    </div>
  )
})
