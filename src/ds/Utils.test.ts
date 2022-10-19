import { getRandomInt } from './Utils'

describe('Get Random Integer: ', () => {
  test('should return integer between 12 and 23', () => {
    const num = getRandomInt(12, 23)
    expect(num).toBeGreaterThanOrEqual(12)
    expect(num).toBeLessThanOrEqual(23)
  })
})