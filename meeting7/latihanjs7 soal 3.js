class Book {
    constructor(title, author, penulis) {
      this.title = title;
      this.author = author;
    }
    getDetails() {
      return `This is ${this.title}, a ${this.author}.`;
    }
    updateAuthor(newAuthor) {
      this.author = newAuthor;
    }
  }
  const mybook = new Book("Javascript Essentials", "Jane Doe");
  console.log(mybook.getDetails());
  
  // bagian 2
  mybook.updateAuthor("Abduh");
  
  console.log(mybook.getDetails());
  