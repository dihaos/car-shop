module.exports = {
  devServer: {
    proxy: `http://azat.tandemdev.ru/kupimashinu/`,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/styles.sass"`,
      },
    },
  },
};
