const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
        
    },
    viewportWidth: 1440, 
    viewportHeight: 990,
    baseUrl: "https://buger-eats-qa.vercel.app"
  },
});


