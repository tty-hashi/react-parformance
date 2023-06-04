import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TagListMemo } from './TagList'
import { TagEditMemo } from './TagEdit'

const MainTag: React.FC = () => {
  const history = useNavigate()
  console.log('rendered MainTag')

  return (
    <div>
      <p className="mb-10 text-xl font-bold">Tags</p>
      <div className="grid grid-cols-2 gap-40">
        <TagListMemo />
        <TagEditMemo />
      </div>
      <ChevronDoubleLeftIcon
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
        onClick={() => history('/')}
      />
    </div>
  )
}

export default MainTag
