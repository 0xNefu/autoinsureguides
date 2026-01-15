export default function multiThemePlugin({ addBase, theme }) {
  // Basic plugin structure for v4
  addBase({
    ':root': {
      '--color-primary': theme('colors.blue.500'),
    },
  });
}
