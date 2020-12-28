import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import guests from '../../data/guests'
import RowItem from './RowItem'

import * as S from './styles'

const Guests: React.FC = () => {
  const { navigate } = useNavigation()
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [pets, setPets] = useState(0)

  return (
    <S.Container>
      <S.GuestList>
        {guests.map((guest, index) => (
          <RowItem
            key={guest.type}
            guest={guest}
            index={index}
            values={[adults, children, infants, pets]}
            setValues={[setAdults, setChildren, setInfants, setPets]}
          />
        ))}
      </S.GuestList>
      <S.ActionButton onPress={() => navigate('SearchResults')}>
        <S.ActionLabel>Search</S.ActionLabel>
      </S.ActionButton>
    </S.Container>
  )
}

export default Guests
