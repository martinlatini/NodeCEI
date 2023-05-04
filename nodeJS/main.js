/* const chalk = require("chalk");

console.log(chalk.blue.bgRed("Hola ") + chalk.red.bgBlue.bold("mundo!")); */

/* function validateEmail(email) {
  let regex = /\w*@\w*\.[a-z]+/gi;
  let result = regex.test(email);

  if (result === true) {
    console.log(`${email} es un correo valido`);
  } else {
    console.log(`${email} NO es un correo valido`);
  }
}

validateEmail("mlatini50@gmail.c2om");
validateEmail("mlatini50"); */
/* 
function extractNumbers(text) {
  const regex = /\d+/g;
  let result = text.match(regex);
  return result;
}

console.log(extractNumbers("I have 25 cats and 123 dog."));
 */

/* function removeExtraSpaces(text) {
  const regex = /\s{2,}/g;
  let noExtraSpaces = text.replace(regex, " ");
  return noExtraSpaces;
}

console.log(
  "Cadena    con    muchos espacios",
  removeExtraSpaces("Cadena      con    muchos espacios")
); */

function isValidPhoneNumber(number) {
  const regex = /.\d+(?:\d+\s+)+/g;
  let checkNumber = regex.test(number);
  return checkNumber;
}

console.log(isValidPhoneNumber("+34 123 123 123"));
console.log(isValidPhoneNumber("123 123 123 213"));
console.log(isValidPhoneNumber("123.1231.23"));

console.log("---------------------------");

function extractHTMLTags(html) {
  const regexHTML = /<[a-z]+>/g;
  let extractHTML = JSON.stringify(html.match(regexHTML));
  let sinCorchetes = extractHTML.replace(/<|>/g, "");
  return sinCorchetes;
}

const html = "<div><p>Hello, world!</p></div>";
console.log(extractHTMLTags(html)); // ['div', 'p']
