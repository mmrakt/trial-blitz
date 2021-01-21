import { render } from "@testing-library/react"
import LinkToAddItem from "./LinkToAddItem"

const categoryMock = "memo"

test("コンポーネントがレンダリングされること", () => {
  const { container, getByText } = render(<LinkToAddItem category={categoryMock} />)

  expect(getByText("create memo")).toBeInTheDocument()
  expect(container.firstChild).toMatchInlineSnapshot(`
    <p
      class="my-8 text-center underline"
    >
      <a
        href="/${categoryMock}s/new"
      >
        create 
        ${categoryMock}
      </a>
    </p>
  `)
})
