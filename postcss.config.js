module.exports = {
  plugins: [
    "tailwindcss",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
          add: true,
          grid: false
        }
      }
    ]
  ]
}
