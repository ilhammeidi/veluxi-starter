// ~/plugins/i18n.js

export default function({ app }) {
  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    if (newLocale === 'ar') {
      app.vuetify.framework.rtl = true
      document.dir = 'rtl'
    } else {
      app.vuetify.framework.rtl = false
      document.dir = 'ltr'
    }
  }
}
