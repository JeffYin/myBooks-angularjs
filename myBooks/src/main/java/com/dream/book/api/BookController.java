package com.dream.book.api;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.dream.book.persistence.entities.Book;
import com.dream.book.persistence.repositories.BookRepository;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.module.SimpleModule;

@RestController
public class BookController {
	private final BookRepository bookRepository;
	 
    @Autowired
    public BookController(final BookRepository bookRepository) {
	   this.bookRepository = bookRepository;
    }
    
    @RequestMapping(value = "/api/books", method = GET)
    public List<Book> getBooks() throws JsonProcessingException {
		List<Book> bookList = bookRepository.findAll(new Sort(Sort.Direction.ASC, "title"));

		return bookList;
    }
    
}


