const size = {
  mobile: "600px",
  tablet: "800px"
}

const theme = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.tablet})`
}

export default theme;