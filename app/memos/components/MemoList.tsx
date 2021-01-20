import { usePaginatedQuery, useRouter } from "blitz"
import getMemos from "app/memos/queries/getMemos"
import PagenateButton from "../../components/PagenateButtons"
import ItemList from "../../components/ItemList"

const ITEMS_PER_PAGE = 100

export const MemoList = () => {
  const router = useRouter()
  const page = Number(router.query.page) || 0
  const [{ memos, hasMore }] = usePaginatedQuery(getMemos, {
    orderBy: { id: "asc" },
    skip: ITEMS_PER_PAGE * page,
    take: ITEMS_PER_PAGE,
  })

  const goToPreviousPage = () => router.push({ query: { page: page - 1 } })
  const goToNextPage = () => router.push({ query: { page: page + 1 } })

  return (
    <>
      <ItemList items={memos} />
      <PagenateButton
        page={page}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        hasMore={hasMore}
      />
    </>
  )
}

export default MemoList
