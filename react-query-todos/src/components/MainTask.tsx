import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TaskListMemo } from './TaskList'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { TaskEditMemo } from './TaskEdit'

const MainTask: React.FC = () => {
  const history = useNavigate()
  const [text, setText] = useState('')
  console.log('rendered MainTask')

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="px-3 py-2 border border-gray-300"
        placeholder="input new task"
      />
      <p className="mb-10 text-xl font-bold">Tasks</p>
      <div className="grid grid-cols-2 gap-40">
        <TaskListMemo />
        <TaskEditMemo />
      </div>
      <ChevronDoubleRightIcon
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
        onClick={() => history('/tags')}
      />
      <p>Tag Page</p>
    </>
  )
}

export default MainTask
