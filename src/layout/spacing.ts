// based on http://carbondesignsystem.com/style/spacing

// Use for margins within grid elements
export const spacing = {
  '3xs': '0.125rem',
  '2xs': '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem'
}

// Use for vertical layout. For horizontal layout, always use grid elements
export const layout = {
  '2xs': '1rem',
  xs: '1.5rem',
  sm: '2rem',
  md: '3rem',
  lg: '4rem',
  xl: '6rem',
  '2xl': '10rem'
}

export const buildSpacingFromString = (padding?: string) => {
  if (!padding) return null

  const values = padding.split(' ')
  if (values.length === 1) {
    return `padding: ${spacing[values[0]]}`
  } else if (values.length === 2 && ['top', 'right', 'bottom', 'left'].includes(values[0])) {
    return `padding-${values[0]}: ${spacing[values[1]]}`
  } else {
    return `padding: ${values.map(s => spacing[s]).join(' ')}`
  }
}
