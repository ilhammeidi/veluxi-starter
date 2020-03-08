export const state = () => ({
  smUp: ['smDown', 'mdDown', 'lgDown', 'xl'],
  mdUp: ['mdDown', 'lgDown', 'xl'],
  lgUp: ['lgDown', 'xl'],
  xlUp: ['xl'],
  xsDown: ['xsDown'],
  smDown: ['smDown', 'xsDown'],
  mdDown: ['mdDown', 'smDown', 'xsDown'],
  lgDown: ['lgDown', 'mdDown', 'smDown', 'xsDown']
})
