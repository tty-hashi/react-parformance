import React from 'react'
import { useNavigate } from 'react-router-dom' // useNavigate instead of useHistory
import { useQueryTasks } from '../hooks/useQueryTasks'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const ReactQueryA: React.FC = () => {
  const history = useNavigate()
  const { status, data } = useQueryTasks()

  console.log('rendered ReactQueryA')

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'error') return <p>Error...</p>

  return (
    <>
      <p className="text-center font-bold mb-3">ReactQueryA</p>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => history('/query-b')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">react query B</p>
    </>
  )
}
