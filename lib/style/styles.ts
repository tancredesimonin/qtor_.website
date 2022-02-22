export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function capitalize(string:string) {
  if (typeof string !== 'string') return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const yellow = {
  50: '#fefce8',
  100: '#fef9c3',
  200: '#fef08a',
  300: '#fde047',
  400: '#facc15',
  500: '#eab308',
  600: '#ca8a04',
  700: '#a16207',
  800: '#854d0e',
  900: '#713f12'
}

export const variable = {
  50: 'var(--primary-color-50)',
  100: 'var(--primary-color-100)',
  200: 'var(--primary-color-200)',
  300: 'var(--primary-color-300)',
  400: 'var(--primary-color-400)',
  500: 'var(--primary-color-500)',
  600: 'var(--primary-color-600)',
  700: 'var(--primary-color-700)',
  800: 'var(--primary-color-800)',
  900: 'var(--primary-color-900)'
}