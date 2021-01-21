import { Link } from "blitz"

type IProps = {
  category: string
}
const LinkToAddItem = (props: IProps) => {
  return (
    <p className="my-8 text-center underline">
      <Link href={`/${props.category}s/new`}>
        <a>create {props.category}</a>
      </Link>
    </p>
  )
}

export default LinkToAddItem
