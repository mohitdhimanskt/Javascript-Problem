function doubleEvenNumbers(numbers) {
     //const newNumbers = [];
     //for (let i = 0; i < numbers.length; i++) {
       //if (numbers[i] % 2 === 0) {
        // newNumbers.push(numbers[i] * 2);
       //}
     //}
     //return newNumbers;
  
    const evenNums = numbers.filter(number => {
      return number%2 ===0 ;
    });
    const doubleNums = evenNums.map(number => {
      return number * 2 ;
    });
  return doubleNums;
  
  }
  
  const myNumbers = [1, 2, 3, 4];
  console.log(doubleEvenNumbers(myNumbers));