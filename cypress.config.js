const {defineConfig} = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    baseUrl: 'https://uat-connect.firecloud.zone'
  },
});
