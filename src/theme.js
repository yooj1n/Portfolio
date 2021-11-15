const size = {
  mobile: "600px",
  tablet: "800px"
}

const theme = {
  BtnColor : "#f1c40f",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.tablet})`
}

export default theme;