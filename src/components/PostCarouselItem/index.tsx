import React from 'react'
import { PostCarouselItemProps } from './types'

import * as S from './styles'

const PostCarouselItem = ({ post }: PostCarouselItemProps) => {
  const { image, type, title, bed, bedroom, newPrice } = post
  return (
    <S.Container>
      <S.Left>
        <S.Img source={{ uri: image }} />
      </S.Left>
      <S.Right>
        <S.Bedrooms>{`${bed} bed ${bedroom} bedroom`}</S.Bedrooms>
        <S.Description numberOfLines={2}>{`${type} · ${title}`}</S.Description>
        <S.Prices>
          <S.NewPrice>${newPrice}</S.NewPrice>
          {` / night`}
        </S.Prices>
      </S.Right>
    </S.Container>
  )
}

export default PostCarouselItem
