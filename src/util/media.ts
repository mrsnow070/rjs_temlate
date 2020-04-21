const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

export default {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};
