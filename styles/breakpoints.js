const size = {
  xs: "600px",
  sm: "768px",
  lg: "1020px",
};
const device = {
  mobile: `@media only screen and (max-width: ${size.xs})`,
  medium: `@media only screen and (max-width: ${size.lg})`,
  tablet: `@media only screen and (min-width: ${size.xs}) and (max-width: ${size.lg})`,
  desktop: `@media only screen and (min-width: ${size.lg})`,
};
export default { size, device };
