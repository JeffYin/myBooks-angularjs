package com.dream.book.api;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dream.book.persistence.entities.Book;
import com.dream.book.persistence.repositories.BookRepository;
import com.fasterxml.jackson.core.JsonProcessingException;

@RestController
@RequestMapping(value="/api/book")
public class BookController {
	private final BookRepository bookRepository;
	 
    @Autowired
    public BookController(final BookRepository bookRepository) {
	   this.bookRepository = bookRepository;
    }
    
    @RequestMapping(value = "/books", method = GET)
    public List<Book> getBooks() throws JsonProcessingException {
		List<Book> bookList = bookRepository.findAll(new Sort(Sort.Direction.ASC, "title"));

		return bookList;
    }

    @RequestMapping(value = "/{bookId}", method = GET)
    public Book getBooks(@PathVariable Long bookId) throws JsonProcessingException {
    	Book book= bookRepository.findOne(bookId); 
    	return book;
    }
    
}


