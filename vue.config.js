module.exports = {
  devServer: {
    proxy: `https://kuplyauto.gnservice-used.ru`,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/styles.sass"`,
      },
    },
  },
};
