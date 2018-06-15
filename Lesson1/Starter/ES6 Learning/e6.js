// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

let newArray = []

array.forEach(user => {
	let username = user.username + "!";
	newArray.push(username);
})
console.log(newArray);

//array.forEach( ){
    
//})




//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map (array=>{
    let {username}= array;
    return username+ "?";
     
})

console.log(mapArray);





//Filter the array to only include users who are on team: red

const filteredArray= array.filter(array=>array.team==="red");

console.log(filteredArray);



//Find out the total score of all users using reduce

const total = array.reduce((accumulator, array) => {return accumulator + array.score},0);


console.log(total); 

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];

const newOneArray = arrayNum.map((num, i) => {
	//console.log(num, i);
	//alert(num);
	return num * 2;
})

console.log(newOneArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const newtwoArray= array.map(user=>{
    user.items = user.items.map(item=>{
        return item+"!";
    })
    
    return user;
    
})

console.log(newtwoArray);

//const map1 = array1.map(x => x * 2);