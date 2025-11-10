import { describe, it, expect } from 'vitest'
import { divide, multiply } from './math'

describe('divide', () => {
  it('should divide two positive numbers correctly', () => {
    expect(divide(10, 2)).toBe(5)
    expect(divide(1, 2)).toBe(0.5)
    expect(divide(9, 3)).toBe(3)
  })

  it('should handle negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5)
    expect(divide(10, -2)).toBe(-5)
    expect(divide(-10, -2)).toBe(5)
  })

  it('should handle zero as dividend', () => {
    expect(divide(0, 5)).toBe(0)
  })

  it('should handle division by zero (returns Infinity)', () => {
    expect(divide(10, 0)).toBe(Infinity)
    expect(divide(-10, 0)).toBe(-Infinity)
  })

  it('should handle decimal numbers', () => {
    expect(divide(1.5, 0.5)).toBe(3)
    expect(divide(7.5, 2.5)).toBe(3)
  })
})

describe('multiply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6)
    expect(multiply(1, 2)).toBe(2)
    expect(multiply(5, 4)).toBe(20)
  })

  it('should handle negative numbers', () => {
    expect(multiply(-2, 3)).toBe(-6)
    expect(multiply(2, -3)).toBe(-6)
    expect(multiply(-2, -3)).toBe(6)
  })

  it('should handle zero', () => {
    expect(multiply(0, 5)).toBe(0)
    expect(multiply(5, 0)).toBe(0)
    expect(multiply(0, 0)).toBe(0)
  })

  it('should handle decimal numbers', () => {
    expect(multiply(1.5, 2)).toBe(3)
    expect(multiply(2.5, 4)).toBe(10)
    expect(multiply(0.5, 0.5)).toBe(0.25)
  })

  it('should handle large numbers', () => {
    expect(multiply(1000, 1000)).toBe(1000000)
  })
})

