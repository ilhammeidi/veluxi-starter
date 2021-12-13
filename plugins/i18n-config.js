// ~/plugins/i18n.js

export default function({ app }) {
  // beforeLanguageSwitch called right before setting a new locale
  if (app.i18n.locale === 'ar') {
    app.head.htmlAttrs.dir = 'rtl'
  } else {
    app.head.htmlAttrs.dir = 'ltr'
  }
  app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale) => {
    if (newLocale === 'ar') {
      app.vuetify.framework.rtl = true
      app.head.htmlAttrs.dir = 'rtl'
    } else {
      app.vuetify.framework.rtl = false
      app.head.htmlAttrs.dir = 'ltr'
    }
  }
}
