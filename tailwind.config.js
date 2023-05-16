
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        height: {
          '720': '45rem',
          '800': '50rem'
        },
        // yaswond code---
        colors: {
          glass: "rgba(255,255,255,0.25)",
          brown: "rgb(30, 30, 17);"
        }
      ,
      backgroundImage: {
        back: "url(./assets/background.svg)"
      }
        //---
      },
    },
    plugins: [],
  }