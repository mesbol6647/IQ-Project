/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 
  "node_modules/flowbite-react/lib/esm/**/*.js" ],
  theme: {
    extend: {
      colors: {
        main: "#5B0888",
        navbarColor:"#E5CFF7",
        footerColor:"#9D76C1",
        labelColor: "#6C6C6C",
        formColor:"#9D76C1",
        white:"#fff",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        label: ["14px",{
          lineHeight: 'normal',
          fontWeight: '500',
        }],
      },
      boxShadow: {
        login: '2px 5px 10px 0px rgba(0, 0, 0, 0.1)',
      }
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
};


