/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,php,js}",
    "./assets/templates/*.{html,php,js}"
  ],
  theme: {
    extend: {
      animation:{
        changecolor:'changecolor 3s linear infinite',
        changecolor2:'changecolor2 3s ease infinite alternate',
        resized:'resized 2s ease infinite alternate',
        resized2:'resized2 2s linear infinite alternate',
        move:'move 5s infinite',
        move2:'move2 5s infinite',
        walk: 'walk 1s infinite steps(6)'

      },
      keyframes:{
        changecolor:{
          "0%":{ background: 'red'},
          "100%":{ background: 'green'},

        },
        changecolor2:{
          "0%":{background:'red'},
          "50%":{background:'yellow'},
          "100%":{background:'green', width:'400px'},
        },
        resized:{
          "100%":{width:'500px'},
        },
        resized2:{
          "100%":{width:'500px'},
        },
        move:{
          "0%":{transform:'translateY(0)'},
          "100%":{transform:'translateY(200px)'},
        },
        move2:{
          "100%":{transform: 'translateX(500px)'},
        },
        walk:{
          "0%":{'background-position': '0 0'},
          "100%":{'background-position': '-672px 0'},
        }
      },
    },
  },
  plugins: [],
}

