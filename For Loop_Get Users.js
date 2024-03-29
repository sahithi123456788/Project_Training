
  
 /* for (let i = 0; i < inp.length; i++) {
    const cityIndex = output.findIndex(item => item.city === inp[i].city);
    if (cityIndex !== -1) {
      output[cityIndex].users.push(inp[i].user);
    } else {
      output.push({ city: inp[i].city, users: [inp[i].user] });
    }
  }
  */
  const inp = [
    { user: 'UserA', city: 'Bangalore' },
    { user: 'UserB', city: 'Delhi' },
    { user: 'UserC', city: 'Bangalore' } 
  ];
  
  const output = [];
  
  const cityMap = {};
  
  for (let i = 0; i < inp.length; i++) {
    const { user, city } = inp[i];
    
    if (cityMap[city]) {
      cityMap[city].push(user);
    } else {
      cityMap[city] = [user];
    }
  }
  
  for (const city in cityMap) {
    output.push({ city, users: cityMap[city] });
  }
  
  console.log(output);

  function getUsers(cityName, outputArray) {
    for (const item of outputArray) {
        if (item.city === cityName) {
            return item.users;
        }
    }
    return [];
}
const usersInBangalore = getUsers('Bangalore', output);
console.log(usersInBangalore);

function addIndia(outputArray) {
  for (const item of outputArray) {
      item.city += 'India';
  }
  return outputArray;
}

const Country = addIndia(output);
console.log(Country); 


  
 
  
  
 

  
  

  