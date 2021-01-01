export type CustomMarkerProps = {
  place: {
    id: string
    image: string
    type: string
    title: string
    bed: number
    bedroom: number
    oldPrice: number
    newPrice: number
    totalPrice: number
    coordinate: {
      latitude: number
      longitude: number
    }
  }
  isSelected: boolean
  onPress: () => void
}

export type SelectionProps = {
  isSelected: boolean
}
