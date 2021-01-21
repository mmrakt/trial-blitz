import { render } from "@testing-library/react"
import ItemList from "./ItemList"

const mockItems = [
  {
    id: 1,
    title: "hogehoge",
  },
  {
    id: 2,
    title: "fugafuga",
  },
]

test("コンポーネントがレンダリングされること", () => {
  const { getByText } = render(<ItemList items={mockItems} />)

  expect(getByText("hogehoge")).toBeInTheDocument()
})
