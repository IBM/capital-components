import { createGridClass, createColClass, buildPaddingClasses } from './grid'

describe('grid classnames', () => {
  it('base grid definition', () => {
    const result = createGridClass()
    expect(result).toBe('bx-grid')
  })

  it('all the options for grid', () => {
    const result = createGridClass({ isContainer: true, isFixedColumns: true, isFluidRows: true })
    expect(result).toBe('bx-grid bx-container bx-grid--fixed-columns bx-grid--fluid-rows')
  })
})

describe('column classnames', () => {
  it('basic size applies to xs and above (all breakpoints)', () => {
    const result = createColClass({ size: 1 })
    expect(result).toBe('bx-grid__col--xs--1')
  })

  it('array of sizes applies classes for listed sizes', () => {
    const result = createColClass({ size: [1, 2] })
    expect(result).toBe('bx-grid__col--xs--1 bx-grid__col--s--2')
  })

  it('array of sizes applies classes for listed sizes', () => {
    const result = createColClass({ size: [1, 1, 2] })
    expect(result).toBe('bx-grid__col--xs--1 bx-grid__col--s--1 bx-grid__col--m--2')
  })

  it('support for fraction syntax', () => {
    const result = createColClass({ size: '1/2' })
    expect(result).toBe('bx-grid__col--xs--6')
  })

  it('support for fraction syntax in array', () => {
    const result = createColClass({ size: ['1/2', '1/6'] })
    expect(result).toBe('bx-grid__col--xs--6 bx-grid__col--s--2')
  })

  it('height array set classes for fixed height accross breakpoints', () => {
    const result = createColClass({ height: [1, 3] })
    expect(result).toBe('bx-grid__col--xs--1 bx-grid__height--xs--1 bx-grid__height--s--3')
  })

  it('heights set classes for fixed height for all breakpoints', () => {
    const result = createColClass({ height: 1 })
    expect(result).toBe('bx-grid__col--xs--1 bx-grid__height--xs--1')
  })
})

describe('custom padding classes', () => {
  it('returns undefined if none provided', () => {
    const result = buildPaddingClasses('none')
    expect(result).toBeUndefined()
  })

  it('horizontal basic class', () => {
    const result = buildPaddingClasses('horizontal')
    expect(result).toBe('bx-padding--horizontal')
  })

  it('all padding', () => {
    const result = buildPaddingClasses('all')
    expect(result).toBe('bx-padding')
  })

  it('specified direction', () => {
    const result = buildPaddingClasses(['top', 'left'])
    expect(result).toBe('bx-padding--top bx-padding--left')
  })
})
