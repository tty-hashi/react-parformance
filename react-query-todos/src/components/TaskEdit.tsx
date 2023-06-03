import React, { memo } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectTask, setEditedTask } from '../slices/todoSlice'
import useQueryTags from '../hooks/useQueryTags'
import useMutateTask from '../hooks/useMutateTask'

const TaskEdit: React.FC = () => {
  const editedTask = useAppSelector(selectTask)
  const dispatch = useAppDispatch()
  const { status, data } = useQueryTags()
  const { createTaskMutation, updateTaskMutation } = useMutateTask()
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedTask.id === 0) {
      createTaskMutation.mutate(editedTask)
    } else {
      updateTaskMutation.mutate(editedTask)
    }
  }
  const tagOptions = data?.map((tag) => (
    <option key={tag.id} value={tag.id}>
      {tag.name}
    </option>
  ))
  console.log('rendered TaskEdit')

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'error') return <div>Error</div>
  if (updateTaskMutation.isLoading) return <div>Updating...</div>
  if (createTaskMutation.isLoading) return <div>Creating...</div>
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="px-3 py-2 border border-gray-300"
          placeholder="new task ?"
          value={editedTask.title}
          onChange={(e) =>
            dispatch(setEditedTask({ ...editedTask, title: e.target.value }))
          }
        />
        <button
          type="submit"
          className="disabled:opacity-40 my-3 mx-3 py-2 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded"
          disabled={!editedTask.title || !editedTask.tag}
        >
          {editedTask.id === 0 ? 'Create' : 'Update'}
        </button>
        <select
          className="mb-3 px-2 py-2 border border-gray-300"
          value={editedTask.tag}
          onChange={(e) =>
            dispatch(setEditedTask({ ...editedTask, tag: e.target.value }))
          }
        >
          <option value={0}>Tag</option>
          {tagOptions}
        </select>
      </form>
    </div>
  )
}

export const TaskEditMemo = memo(TaskEdit)
