function logBookTitles(bookTitles) {
    // sort the book titles in alphabetical order
    const sortedTitles = bookTitles.sort();
    
    // log the sorted titles to the console
    console.log("Book titles:");
    for (let title of sortedTitles) {
      console.log("- " + title);
    }
  }
  
  function getBookTitles(books, callback) {
    // use map function to create a new list containing only the titles of the books
    const bookTitles = books.map(book => book.title);
    
    // pass the new list to the callback function
    callback(bookTitles);
  }
  
  // example list of books
  const books = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }
  ];
  
  // call getBookTitles function and pass it the list of books and the logBookTitles function as arguments
  getBookTitles(books, logBookTitles);
  