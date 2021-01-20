import { Link } from "blitz"

type IProps = {
  category: string
}
const CreateButton = (props: IProps) => {
  return (
    <p className="my-8 text-center underline">
      <Link href={`/${props.category}s/new`}>
        <a>create {props.category}</a>
      </Link>
    </p>
  )
}

export default CreateButton
