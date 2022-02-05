export interface Order {
  partName: string,
  vehicle: string,
  vendor: string,
  partNumber: string,
  dateExpected: Date,
  dateOrdered: Date
}