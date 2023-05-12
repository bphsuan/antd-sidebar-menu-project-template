module.exports = {
  server: {
    command: 'npm run dev',
    port: 4000,
    launchTimeout: 40000
  },
  launch: {
    headless: false,
    devtools: true,
    slowMo: 30,
    product: 'chrome'
  }
}
