interface orderStatus {
  timeRequired: number,
    timeSpent: number
}

export interface order {
  orderId: number,
  estimateDelivery: string,
  orderStatus: string,
  orderStatusProgress: orderStatus
}
