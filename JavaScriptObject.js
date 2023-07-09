"use restricted"
let station = "Makadara Railway Station"
let station2 = "Naukur Railway Station"
// Object
let ticket = {
    from : `${station}`,
    to : `${station2}`,
    price : 250
};
 console.log('Teetle booked a ticket at '+ ticket.from + 'and was headed to '+ ticket.to+ '. The price was: '+ticket.price+'.')

 // empty object. add properties(key values) into empty object
 let person = {};
 person.name = "Robert Musungu";
 person.surname = "Abisai";
 console.log(person)
 console.log(person.name+'. Person is typeof: '+typeof person)

 // Array. Has three books, each book has a title, author and number of Pages

 let JavBooks = [];
 let book1 = {
    title : 'Speaking JavaScript',
    author : 'Axel Rauschmayer',
    noOfpages : 460
 };
 let book2 ={
    title : 'Programming JavaScript Applications',
    author : 'Eric Elliott',
    noOfpages : 254
 };
 let book3 = {
    title : 'Understanding ECMAScript 6',
    author : 'Nicholas C. Zakas',
    noOfpages : 352
 };
 sn1 = JavBooks.push(book1) // last book. (push inserts at the end)
 sn2 = JavBooks.unshift(book2) // second book (unshift inserts at the beginning)
 sn3 = JavBooks.unshift(book3) //first book
 /*console.log(JavBooks)*/

 // add a last book to JavBooks at the end of
 let lastbook = {
    title : 'Learning JavaScript Design Patterns',
    author : 'Addy Osmani',
    noOfpages : 254
 };
 JavBooks.push(lastbook);
 console.log(JavBooks);
 console.log('Java Books Titles');

 // Books titles
 console.log('Books title: 1. '+ book1.title,+' 2.'+ book2.title,+' 3. '+ book3.title+' 4. '+ lastbook.title);

 // slice the to create new array from JavBook
 console.log('New Library sliced from Java Boooks');
 newJavaLib = JavBooks.slice(2);
 console.log(newJavaLib);

 // check the length of JavBook
 console.log('Original length of JavBooks:')
 console.log(JavBooks.length);
 console.log(JavBooks);

 //Assume one first book got lost, remove it from JavBooks and show the new lenght of javBooks
 console.log('New Length after first book lost');
 let JavBooksupdated = JavBooks.shift();
 console.log(JavBooks.length);
 console.log(JavBooks);
 //new length after last book lost
 let lastbooklost = JavBooks.pop();
 console.log('last book lost')
console.log(JavBooks.length);
console.log(JavBooks);
console.log('Book lost:')
console.log(lastbooklost);

// sum of all books pages
let totalBookPages = book1.noOfpages+book2.noOfpages+book3.noOfpages+lastbook.noOfpages;
console.log("Total Pages of all Books: "+totalBookPages)
console.log(JavBooks[0].noOfpages)

/*
let x = 10 / 100;
{
console.log(typeof (x));
}
let y =100/0
console.log(y)

// let z = 20n + 10;
// console.log(z)
let e = "Alice" + 10
console.log(e)
msg = "Robert"
console.log(msg.length)

We have declared an array let animals = ["dog", "cat", "hamster"];. We want to temporarily comment out the element "cat", and to do this, we can modify the declaration as follows:


let animals = ["dog", //"cat",// "hamster"];

let animals = ["dog", #"cat",# "hamster"];

let animals = ["dog", "hamster"];

let animals = ["dog", /*"cat",/ "hamster"];


*/
// let animals = ["dog", /*"cat",*/ "hamster"];
// console.log(animals)

