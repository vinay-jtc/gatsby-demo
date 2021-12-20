
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/vanni/jtc/gatsby-demo/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/vanni/jtc/gatsby-demo/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/vanni/jtc/gatsby-demo/src/pages/index.js"))
}

