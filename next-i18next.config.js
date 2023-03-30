const HttpBackend = require('i18next-http-backend/cjs')
const ChainedBackend= require('i18next-chained-backend').default
const LocalStorageBackend = require('i18next-localstorage-backend').default

module.exports = {
  backend: {
    backendOptions: [
      { expirationTime: 10*1000 }, 
      /* { loadPath: 'http://localhost:3000/'} */
      { loadPath: "http://localhost:3000/locales/{{lng}}/{{ns}}.json" }
    ], // 1 hour
    backends: typeof window !== 'undefined' ? [LocalStorageBackend, HttpBackend]: [],
  },
  // debug: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr'],
  },
  serializeConfig: false,
  use: typeof window !== 'undefined' ? [ChainedBackend] : [],
}
