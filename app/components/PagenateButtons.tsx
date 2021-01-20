import { BlitzPage } from "blitz"

type IProps = {
  page: number
  goToPreviousPage: () => void
  goToNextPage: () => void
  hasMore: boolean
}

const PagenateButton = (props: IProps) => {
  const { page, goToPreviousPage, goToNextPage, hasMore } = props
  return (
    <div className="mx-2 my-2">
      <button disabled={page === 1} onClick={goToPreviousPage} className="px-2 underline">
        Previous
      </button>
      <button disabled={!hasMore} onClick={goToNextPage} className="px-2 underline">
        Next
      </button>
    </div>
  )
}

export default PagenateButton
