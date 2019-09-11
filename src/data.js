// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.


//An array of nubmers
export const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];


//An array of objects
export const operators = [
  {
    char: "/",
    value: "/"
  },
  {
    char: "x",
    value: "*"
  },
  {
    char: "-",
    value: "-"
  },
  {
    char: "+",
    value: "+"
  },
  {
    char: "=",
    value: "="
  }
];

//An array or characters
export const specials = ["C", "+/-", "%"];

//I am going to export individually because I don't know if I want them all exported together to the same file. Another option is to export them all a default together, but depends if I want to export them all together to the same file. 
// export default {
//   numbers, operators, specials
// }
