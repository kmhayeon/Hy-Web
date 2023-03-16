module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['NanumSquareRound', 'Helvetica Neue', 'sans-serif'],
        // sans가 제일 기본 상속 폰트이므로 전체 폰트바꾸려면 sans 재지정후 맨앞에 원하는 폰트 넣기
        hi: ['NanumSquareRound', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
