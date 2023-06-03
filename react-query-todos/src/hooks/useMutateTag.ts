import axios from 'axios'
import { useAppDispatch } from '../app/hooks'
import { resetEditedTask } from '../slices/todoSlice'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Tag } from '../types/types'

export const useMutateTag = () => {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()

  const createTagMutation = useMutation(
    (tag: Omit<Tag, 'id'>) =>
      axios.post<Tag>(`${process.env.REACT_APP_REST_URL}/tags/`, tag),
    {
      onSuccess: (res) => {
        const previousTags = queryClient.getQueryData<Tag[]>(['tags'])
        if (previousTags) {
          queryClient.setQueryData(['tags'], [...previousTags, res.data])
        }
        dispatch(resetEditedTask())
      },
    }
  )
  const updateTagMutation = useMutation(
    (tag: Tag) =>
      axios.put<Tag>(`${process.env.REACT_APP_REST_URL}/tags/${tag.id}/`, tag),
    {
      onSuccess: (res, variables) => {
        const previousTags = queryClient.getQueryData<Tag[]>(['tags'])
        if (previousTags) {
          queryClient.setQueryData<Tag[]>(
            ['tags'],
            previousTags.map((tag) =>
              tag.id === variables.id ? res.data : tag
            )
          )
        }
        dispatch(resetEditedTask())
      },
    }
  )
  const deleteTagMutation = useMutation(
    (id: number) =>
      axios.delete(`${process.env.REACT_APP_REST_URL}/tags/${id}/`),
    {
      onSuccess: (_, variables) => {
        const previousTags = queryClient.getQueryData<Tag[]>(['tags'])
        if (previousTags) {
          queryClient.setQueryData<Tag[]>(
            ['tags'],
            previousTags.filter((tag) => tag.id !== variables)
          )
        }
        dispatch(resetEditedTask())
      },
    }
  )
  return { createTagMutation, updateTagMutation, deleteTagMutation }
}
