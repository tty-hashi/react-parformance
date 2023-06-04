import React, { memo } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectTag, setEditedTag } from '../slices/todoSlice'
import { useMutateTag } from '../hooks/useMutateTag'

type Props = {}

const TagEdit: React.FC<Props> = () => {
  const editedTag = useAppSelector(selectTag)
  const dispatch = useAppDispatch()
  const { createTagMutation, updateTagMutation } = useMutateTag()
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedTag.id === 0) {
      createTagMutation.mutate(editedTag)
    } else {
      updateTagMutation.mutate(editedTag)
    }
  }
  console.log('rendered TagEdit')
  if (updateTagMutation.isLoading) return <div>Updating...</div>
  if (createTagMutation.isLoading) return <div>Creating...</div>
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="mb-3 px-3 py-2 border border-gray-300"
          placeholder="new tag ?"
          value={editedTag.name}
          onChange={(e) =>
            dispatch(setEditedTag({ ...editedTag, name: e.target.value }))
          }
        />
        <button
          type="submit"
          className="disabled:opacity-40 my-3 mx-3 py-2 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded"
          disabled={!editedTag.name}
        >
          {editedTag.id === 0 ? 'Create' : 'Update'}
        </button>
      </form>
    </div>
  )
}

export const TagEditMemo = memo(TagEdit)
