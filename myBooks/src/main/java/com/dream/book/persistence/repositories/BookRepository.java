package com.dream.book.persistence.repositories;

import java.util.Calendar;
import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;


import com.dream.book.persistence.entities.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
	
	
}