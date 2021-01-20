import { Link } from "blitz"

type IProps = {
  items: any[]
}

export const ItemList = (props: IProps) => {
  const { items } = props
  return (
    <ul className="my-2 mx-4">
      {items.map((item) => (
        <li key={item.id} className="py-2">
          <Link href={`/items/${item.id}`}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ItemList
