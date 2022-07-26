//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//Examples (Input -> Output):
//* "String"      -> "SSttrriinngg"
//* "Hello World" -> "HHeelllloo  WWoorrlldd"
//* "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    const y = str.split("").map(x=> x + x).join("");
    return y; 
  }
// .split с пустым значением,  разделяет строку на отдельные буквы. при помощи map удвоим буквы и при помощи join объеденим снова в одну строку.