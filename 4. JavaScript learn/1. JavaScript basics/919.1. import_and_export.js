// Exporting functions:
function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString };


// Exporting variables:
// Usually you will define a variable like so. But if you want to export
// a variable, you need to add the 'export' statement in front
// const foo = "bar";
// const bar = "foo";
export const foo = "bar";
export const bar = "foo";