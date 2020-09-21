var name = 'Samuel Osekeny';
var age = 28;
var hasHobbies = true;

//Using Arrow Functions
const summarizeUser = (userName,userAge,userHasHobby) =>
//function summarizeUser(userName,userAge,userHasHobby) 
{
  return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);

}
console.log(summarizeUser(name,age, hasHobbies));


const person = {
    name: 'Samuel Osekeny',
    age: 28,
    greet() {
        console.log('Hi, I am ' + this.name)

    }
};
//person.greet();

//const hobbies = ['Sports', 'Cooking','Sleeping'];
//for (let hobby of hobbies) {
//    console.log(hobby);
//}
////const copiedPerson = {...person};
//console.log(copiedPerson);
//console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//hobbies.push('Programming');

//console.log(hobbies);
//const copiedArray = hobbies.slice();
//const copiedArray = [...hobbies];
//console.log(copiedArray);

const fetchData = (callback) => {
    const promise = new Promise((resolve,reject)=> {
        setTimeout(() => {
            callback('Done');
    }, 1500);
    });
   return promise;
};



setTimeout(() => { 
    console.log('Timer is done!');
    fetchData().then(text => { 
        console.log(text);
     return fetchData();
     })
     .then(text => { 
        console.log(text2);
     
     });
}, 2000);



