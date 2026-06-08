export type Rating = {
  value: number
  votedCount: number
}

export type SpecialOffer = {
  startDate: Date
  endDate: Date
  price: number
}

export type Product = {
  id: string
  name: string
  brand: string
  category: string
  price: number
  wasPrice: number
  isSale: boolean
  isFeatured: boolean
  discountPercentage: number
  description: string
  rating: Rating
  createdAt: Date
  specialOffer: SpecialOffer | null
  colors: string[]
  soldTimes: number
  code: string
  thumbnail: string
  imageSet: string[]
}