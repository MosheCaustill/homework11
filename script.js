class Users {
    constructor(fName,lName,city) {
        this.fName = fName;
        this.lName = lName;
        this.city = city;
        this.books = [];
    }
    lendBook(booksObject) {
        if (booksObject.status == true) {
            this.books.push(booksObject.bookName);
            booksObject.status = false;
            console.log(this.fName + ' ' + this.lName + ' enjoy reading ' +booksObject.bookName)
        } else { 
            console.log(this.fName + ' ' + this.lName + ' ' + booksObject.bookName + ' is not available')
        }
    }
}

class Report {
    constructor() {
        this.users = [];
    }
    addUser(userObject) {
        this.users.push(userObject);
    }
    reporter() {
        this.users.forEach(element=> {
            console.log(element.fName + ' ' + element.lName + '\nbooks: '+ element.books);
        })
    }
}

class Book {
    constructor(bookName,Author,status) {
        this.bookName = bookName;
        this.Author = Author;
        this.status = status;
    }
}

let user1 = new Users('Moshe','Caustill','bat-yam');
let user2 = new Users('Osnat','Caustill','bat-yam');
let book1 = new Book('book1','author1',true);
let book2 = new Book('book2','author2',true);
let book3 = new Book('book3','author3',true);
user1.lendBook(book3);
user1.lendBook(book2);
user2.lendBook(book2);
user2.lendBook(book1);
console.log(user1);
let report1 = new Report();
console.log(report1);
report1.addUser(user1);
report1.addUser(user2);
console.log(report1);
report1.reporter();
