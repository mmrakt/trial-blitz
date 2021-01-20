import { BlitzPage } from "blitz"

type IProps = {
  title: string
}

const PageTitle = (props: IProps) => {
  return <h1 className="text-4xl my-4 mx-4">{props.title}</h1>
}

export default PageTitle
