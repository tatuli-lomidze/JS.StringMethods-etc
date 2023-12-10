// 1)

const replacedValue = (str, valueToReplace, valueToReplaceWith) => {
    return str.split(valueToReplace).join(valueToReplaceWith);
  }
  
  const replacedString = replacedValue('Jamec Bond', 'c', 's');
  console.log(replacedString); 
  


// 2)

const capitalize = (sentence) =>  {
    const words = sentence.split(' ');
  
    const capitalize = words.map(word => {

      return word.toUpperCase();
    });
  
    const capitalizedSentence = capitalize.join(' ');
  
    return capitalizedSentence;
  }
  
  const sentence = "james bond lives in tbilisi";
  const capitalizedSentence = capitalize(sentence);
  console.log(capitalizedSentence); 

// 3)

const sortUsersByAge = (users) => {
    return users.sort((a, b) => a.age - b.age);
  }
    const usersArray = [
    { name: 'Lasha', age: 30 },
    { name: 'Saba', age: 20 },
  ];
    const sortedUsers = sortUsersByAge(usersArray);
  console.log(sortedUsers);