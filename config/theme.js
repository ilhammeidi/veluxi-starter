// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  ubuntu: {
    primary: colors.orange.darken3, // primary main
    primarylight: colors.orange.lighten5, // primary light
    primarydark: colors.orange.darken4, // primary dark
    secondary: colors.purple.base, // secondary main
    secondarylight: colors.purple.lighten5, // secondary light
    secondarydark: colors.purple.darken2, // secondary dark
    anchor: colors.orange.base, // link
  },
};

const theme = {
  ...palette.ubuntu,
};

export default theme;
