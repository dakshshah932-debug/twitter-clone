/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      inset: {
       
        'cross-top': '6px',
        'cross-left':'2.5rem',
        'hamburger-left':'-4.75rem'  
      },
      screens:{
        '3xl':'1400px'
      },
      
      height:{
        'blueboxh':'5px'
      },
      padding:{
        'blueboxp':'5px'
      },
      margin:{
        'zeromargin':'-11px',
        'blueboxm':'123px',
        'marginleft':'5rem',
        'marginright':'-164px',
        'midmarginright':'-3.5rem',
        'leftmarginleft':'10rem',
        'postbtnmargin':'-3.5rem',
        'blueselectormargin':'2.5rem'

      },
      width:{
        'rightwidth':'386px',
        'accwidth':'300px',
        'widthratio':'600px',
        'smallwidthratio':'30%',
        'lgwidthratio':'751px'
        
      },
      fontSize:{
        'xs-sm':'0.8rem',
      },
      colors:{
        customGray: '#202327',
        textcolor: 'rgb(113, 118, 123)',
        subscribe: '#1A8CD8',
        borders: '#17191B',
        hoverpost:'rgba(239, 243, 244, 0.9)',
        showmore:'rgb(29, 155, 240)',
        twitterblue:'rgb(29, 161, 242)',
        postbtn:'rgb(120,122,122)',
        rigththash:'#080808'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
}

}