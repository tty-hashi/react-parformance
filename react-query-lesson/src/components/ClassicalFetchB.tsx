import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const ClassicalFetchB: React.FC = () => {
  const history = useNavigate()
  const { tasks } = useStateContext()
  console.log('rendered ClassicalFetchB')
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center font-bold mb-3">ClassicalFetchB</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => history('/fetch-a')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch A</p>
    </div>
  )
}
