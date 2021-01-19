import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { Link, BlitzPage } from "blitz"
import MemoList from "../../components/MemoList"

const MemosPage: BlitzPage = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl my-4 mx-4">Memo List</h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <MemoList />
      </Suspense>
      <p className="my-8 text-center underline">
        <Link href="/memos/new">
          <a>Create Memo</a>
        </Link>
      </p>
    </>
  )
}

MemosPage.getLayout = (page) => <Layout title={"Memos"}>{page}</Layout>

export default MemosPage
