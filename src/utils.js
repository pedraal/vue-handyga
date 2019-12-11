import locales from './locales.json';

export function devMode() {
  return process.env.NODE_ENV !== 'production';
}

// This is a simple helper to create a store inside the Vuex.
export function registerVuexStore(vuex, storeName, store) {
  if (!vuex) return;
  const isRegistered = vuex._modules.get([storeName]);
  if (!isRegistered) {
    vuex.registerModule(storeName, store);
  }
}

export function selectLocale() {
  if (window.navigator.language === 'fr') {
    return locales.fr;
  } else {
    return locales.en;
  }
}
