export const formatMoney = (value: string) =>
  Intl.NumberFormat('co-ES', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(parseInt(value))
