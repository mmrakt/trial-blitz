import React from "react"

type MemoFormProps = {
  initialValues: any
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const MemoForm = ({ initialValues, onSubmit }: MemoFormProps) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(event)
      }}
    >
      <input type="text" className="" />
      <br />
      <textarea name="" id="" cols={30} rows={10}></textarea>
      <br />
      <button>Submit</button>
    </form>
  )
}

export default MemoForm
