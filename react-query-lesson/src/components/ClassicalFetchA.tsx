import React from 'react'
import { useClassicalFetch } from '../hooks/useClassicalFetch'
import { useNavigate } from 'react-router-dom' // useNavigate instead of useHistory
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const ClassicalFetchA: React.FC = () => {
  const history = useNavigate()
  const { isLoading, isError, tasks } = useClassicalFetch()
  console.log('rendered ClassicalFetchA')
  if (isError) return <p>Error...</p>
  if (isLoading) return <p>Loading...</p>

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center font-bold mb-3">ClassicalFetchA</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => history('/fetch-b')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch B</p>
    </div>
  )
}
