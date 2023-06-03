import React, { memo } from 'react'
import { Task } from '../types/types'
import { useAppDispatch } from '../app/hooks'
import useMutateTask from '../hooks/useMutateTask'
import { setEditedTask } from '../slices/todoSlice'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'

type Props = {
  task: Task
}

const TaskItem: React.FC<Props> = ({ task }) => {
  const dispatch = useAppDispatch()
  const { deleteTaskMutation } = useMutateTask()
  console.log('rendered TaskItem')

  if (deleteTaskMutation.isLoading) return <div>Deleting...</div>

  return (
    <li className="my-3">
      <span className="font-bold">{task.title}</span>
      <span>
        {' : '}
        {task.tag_name}
      </span>

      <div className="flex float-right ml-20">
        <PencilAltIcon
          className="h-5 w-5 mr-3 cursor-pointer"
          onClick={() => {
            dispatch(
              setEditedTask({
                id: task.id,
                title: task.title,
                tag: task.tag_name,
              })
            )
          }}
        />
        <TrashIcon
          className="h-5 w-5 text-red-500 cursor-pointer"
          onClick={() => {
            deleteTaskMutation.mutate(task.id)
          }}
        />
      </div>
    </li>
  )
}

export const TaskItemMemo = memo(TaskItem)
