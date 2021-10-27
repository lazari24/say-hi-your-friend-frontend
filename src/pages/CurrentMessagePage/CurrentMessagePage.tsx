import {useParams} from "react-router-dom";

interface RouterProps {
  id: string
}

export const CurrentMessagePage = () => {
  const {id} = useParams<RouterProps>()

  return (
    <div>
      Current page with ID {id}
    </div>
  )
}
