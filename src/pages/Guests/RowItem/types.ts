import { Dispatch, SetStateAction } from 'react'

export type RowItemProps = {
  guest: {
    type: string
    details: string
  }
  index: number
  values: number[]
  setValues: Dispatch<SetStateAction<number>>[]
}
