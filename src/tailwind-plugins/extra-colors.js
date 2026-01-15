export default function extraColorsPlugin({ addUtilities, theme }) {
  const newUtilities = {
    '.custom-gradient': {
      background: `linear-gradient(45deg, ${theme('colors.blue.500')}, ${theme('colors.purple.500')})`,
    },
  };
  addUtilities(newUtilities);
}
