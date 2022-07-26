//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// находим четные числа путем остатка от деления , с помощью % (x % == 0);

function even_or_odd(number) {
    if (number % 2 == 0){
      return "Even";
    } else{
      return "Odd"
    } ;
  }