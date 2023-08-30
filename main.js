//#1
// const obj = [
//     {name: 'Egor', id: 2, city: 'Kharkiv'},
//     {name: 'Alena', id: 1, city: 'Poltava'},
//     {name: 'Artem', id: 3, city: 'Lutsk'},
//     {name: 'Oleh', id: 4, city: 'Lviv'},
// ];
// const a = users.map(user => user.name);
// console.log(a);

//#2
// const users = [
//     { name: "John", eyeColor: "blue" },
//     { name: "Jane", eyeColor: "brown" },
//     { name: "Alex", eyeColor: "green" },
//     { name: "Vlad", eyeColor: "blue" },
//     { name: "Egor", eyeColor: "brown" },
//     { name: "Artem", eyeColor: "green" },
// ];
// function getUsersByEyeColor(eyeColor) {
//     return users.filter(user => user.eyeColor === eyeColor);
//   }
//   const blueEyeUsers = getUsersByEyeColor("blue");
// console.log("Користувачі з синіми очима:", blueEyeUsers);


// const brownEyeUsers = getUsersByEyeColor("brown");
// console.log("Користувачі з карими очима:", brownEyeUsers);
// const greenEyeUsers = getUsersByEyeColor("green");
// console.log("Користувачі з зеленими очима:", greenEyeUsers);

//#3//
// const users = [
//     { name: "John", gender: "cholovicha" },
//     { name: "Jane", gender: "zhinocha" },
//     { name: "Alex", gender: "non-binary" },
// ];
// function getUsersByGender(gender) {
//     users.filter(user => user.gender === gender)
//     users.map(user => user.name);
//   }
//    const zhinochiUsers = getUsersByGender("zhinocha");
//    console.log("Жіночі імена:", zhinochiUsers);
//    const cholovichaUsers = getUsersByGender("cholovicha");
//    console.log("Чоловічі імена:", cholovichaUsers);








// //#4//
//  const active = [
//      { name: 'Egor', isActive: true},
//      { name: 'Vlad', isActive: false},
//      { name: 'Art', isActive: true},
//      { name: 'Alina', isActive: false},
//      { name: 'Artem', isActive: false},
//      { name: 'Pasha', isActive: true},
//  ];
//  const inactiveUsers = active.filter(user => !user.isActive);
//  console.log("Неактивні користувачі:", inactiveUsers);


// //#5//
// const users = [
//     { name: "Vlad", email: "vlad@gmail.com" },
//     { name: "Lina", email: "lina@gmail.com" },
//     { name: "Gleb", email: "gleb@gmail.com" },
// ];
// function getUserByEmail(email) {
//     users.find(user => user.email === email);
// }
//   const userByEmail = getUserByEmail('vlad@gmail.com');
//   console.log("Користувач за email:", userByEmail);
  

  
  
  
  
  
  
//#6//
 const user = [
     {name: 'Egor', year: 24},
     {name: 'Alena', year: 1},
     {name: 'Artem', year: 20},
     {name: 'Oleh', year: 32},
     {name: 'Vlad', year: 21},
 ];
 const minAge = 20;
 const maxAge = 30;

 const usersAges = user.filter(user => minAge <= user.year && user.year <= maxAge);
 console.log(user.name = usersAges);