// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {}, // Pour Tailwind v4
    // OU pour v3 :
    // tailwindcss: {},
    autoprefixer: {},
  },
};
