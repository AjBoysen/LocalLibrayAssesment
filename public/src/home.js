const books = require("../data/books")
const authors = require("../data/authors")
let findById = require("./helperfunctions")

//passed
function getTotalBooksCount(books) {
  return books.length
}
//passed
function getTotalAccountsCount(accounts) {
  return accounts.length
}
// passed
function getBooksBorrowedCount(books) {
  let total = 0
  for (let book in books){
    if (books[book].borrows[0].returned === false){
      total++
    }
}
return total
}

function getMostCommonGenres(books) {
const map = {}
const result = []
books.forEach(book => {
  if (map[book.genre]){
    map[book.genre]++
  }else {
    map[book.genre] = 1
  }
})
for (let genre in map){
  result.push({
    name: genre, count:map[genre]
  })
}
return result.sort((genreA, genreB) => genreB.count - genreA.count)
.slice(0, 5)
}
//passed
function getMostPopularBooks(books) {
     return books.sort((bookA, bookB) => bookA.borrows.length > bookB.borrows.length ? -1:1)
.map((book) =>{
  const name = book.title
  const count = book.borrows.length
  const books = {name, count}
  return books
})
     .slice(0, 5)
}
//passed
function getMostPopularAuthors(books, authors) {
  const map = {}
const result = []
books.forEach(book => {
  authorObj = findById(authors, book.authorId)
  const authorName = `${authorObj.name.first} ${authorObj.name.last}`
  if (map[authorName]){
    map[authorName] += book.borrows.length
  }else {
    map[authorName] = book.borrows.length
  }
})
for (let names in map){
  result.push({
    name: names, count:map[names]
  })
}
return result.sort((authorA, authorB) => authorB.count - authorA.count)
.slice(0, 5)
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
