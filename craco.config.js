const path = require("path");

module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    webpack: {
      alias: {
        '@ly': path.resolve(__dirname, "src/layout/"),
        '@components': path.resolve(__dirname, "src/components/"),
        '@icons': path.resolve(__dirname, "src/assets/icons"),
        '@ctx': path.resolve(__dirname, "src/context/")
      }
    }
  }