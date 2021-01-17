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
      <input type="text" />
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Submit</button>
    </form>
  )
}

export default MemoForm
