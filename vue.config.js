module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "src/assets/styles/_variables.scss";
        `,
      },
    },
  },
}