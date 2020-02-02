import locales from './locales.json'

export function devMode () {
  return process.env.NODE_ENV !== 'production'
}
export function selectLocale () {
  if (window.navigator.language === 'fr') {
    return locales.fr
  } else {
    return locales.en
  }
}
