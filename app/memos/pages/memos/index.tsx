import { Suspense } from "react"
import Layout from "app/layouts/Layout"
import { BlitzPage } from "blitz"
import PageTitle from "../../../components/PageTitle"
import MemoList from "../../components/MemoList"
import LinkToAddItem from "../../../components/LinkToAddItem"

const MemosPage: BlitzPage = () => {
  return (
    <>
      <PageTitle title="Memo List" />
      <Suspense fallback={<div>Loading...</div>}>
        <MemoList />
      </Suspense>
      <LinkToAddItem category="memo" />
    </>
  )
}

MemosPage.getLayout = (page) => <Layout title={"Memos"}>{page}</Layout>

export default MemosPage
