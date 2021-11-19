const size = {
  mobile: "600px",
  tablet: "800px"
}

const theme = {
  emphasis : "#ffa801",
  base : "#000000",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.tablet})`
}

export default theme;