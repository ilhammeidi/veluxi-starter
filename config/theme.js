// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  greenNature: {
    primary: colors.teal.base, // primary main
    primarylight: colors.teal.lighten5, // primary light
    primarydark: colors.teal.darken3, // primary dark
    secondary: colors.lightGreen.darken2, // secondary main
    secondarylight: colors.lightGreen.lighten5, // secondary light
    secondarydark: colors.lightGreen.darken4, // secondary dark
    anchor: colors.teal.base // link
  },
};

const theme = {
  ...palette.greenNature,
};

export default theme;
