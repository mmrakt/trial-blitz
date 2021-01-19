import { Link, usePaginatedQuery, useRouter } from "blitz"
import getMemos from "app/memos/queries/getMemos"

const ITEMS_PER_PAGE = 100

export const MemoList = () => {
  const router = useRouter()
  //const currentUser = useCurrentUser()
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
      <ul className="my-2 mx-4">
        {memos.map((memo) => (
          <li key={memo.id} className="py-2">
            <Link href={`/memos/${memo.id}`}>
              <a>{memo.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mx-2 my-2">
        <button disabled={page === 1} onClick={goToPreviousPage} className="px-2 underline">
          Previous
        </button>
        <button disabled={!hasMore} onClick={goToNextPage} className="px-2 underline">
          Next
        </button>
      </div>
    </>
  )
}

export default MemoList
