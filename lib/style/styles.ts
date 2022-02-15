export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function capitalize(string:string) {
  if (typeof string !== 'string') return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}