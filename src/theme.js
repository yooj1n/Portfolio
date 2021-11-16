const size = {
  mobile: "600px",
  tablet: "800px"
}

const theme = {
  blue : "#00a8ff",
  darkblue : "#222f3e",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.tablet})`
}

export default theme;