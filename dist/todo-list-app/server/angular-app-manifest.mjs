
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1193, hash: 'c478b428d2acc6ce4db8735ec40978c302795579ae66ac49dda179ee192be727', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 973, hash: 'a02fcce84ca4507347b8dd3f4e3941a0f86a3f3b8b824ba39a7f88e34f065fb4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7917, hash: '79d4be292b8e7f743286a128b14cdfa49636d6d548e6f9b6c9ca5fc68b62ca0b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U6CBX33T.css': {size: 636960, hash: '1uMKsejbTtM', text: () => import('./assets-chunks/styles-U6CBX33T_css.mjs').then(m => m.default)}
  },
};
