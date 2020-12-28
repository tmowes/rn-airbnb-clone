import React from 'react'

import * as S from './styles'
import { PostProps } from './types'

const Post = ({ post }: PostProps) => {
  const {
    image,
    type,
    title,
    bed,
    bedroom,
    oldPrice,
    newPrice,
    totalPrice,
  } = post
  return (
    <S.Container>
      <S.Img source={{ uri: image }} />
      <S.Bedrooms>{`${bed} bed ${bedroom} bedroom`}</S.Bedrooms>
      <S.Description numberOfLines={2}>{`${type} · ${title}`}</S.Description>
      <S.Prices>
        <S.OldPrice>{`$${oldPrice}`}</S.OldPrice>
        <S.NewPrice>{`  $${newPrice}`}</S.NewPrice>
        {` / night`}
      </S.Prices>
      <S.TotalPrice>{`$${totalPrice} total`}</S.TotalPrice>
    </S.Container>
  )
}

export default Post
