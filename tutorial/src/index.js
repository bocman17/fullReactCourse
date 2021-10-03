import React from 'react'
import ReactDom from 'react-dom'

import{greeting} from './testing/testing'

// CSS
import './index.css'
// data import
import { books } from './books'
// component import
import Book from './Book'
// setup vars

function BookList() {
  console.log(greeting);
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
