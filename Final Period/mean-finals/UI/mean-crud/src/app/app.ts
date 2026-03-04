import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService, Book } from './book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  books: Book[] = [];
  isEditing = false;
  showForm = false;

  newBook: Book = {
    title: '',
    author: '',
    genre: '',
    year: 0,
    description: '',
    price: 0
  };

  selectedBook: Book = {
    _id: '',
    title: '',
    author: '',
    genre: '',
    year: 0,
    description: '',
    price: 0
  };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  addBook(): void {
    this.bookService.createBook(this.newBook).subscribe(() => {
      this.loadBooks();
      this.resetNewBook();
      this.showForm = false;
    });
  }

  editBook(book: Book): void {
    this.isEditing = true;
    this.selectedBook = { ...book };
  }

  updateBook(): void {
    if (this.selectedBook._id) {
      this.bookService.updateBook(this.selectedBook._id, this.selectedBook).subscribe(() => {
        this.loadBooks();
        this.isEditing = false;
      });
    }
  }

  deleteBook(id: string): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.loadBooks();
      });
    }
  }

  resetNewBook(): void {
    this.newBook = {
      title: '',
      author: '',
      genre: '',
      year: 0,
      description: '',
      price: 0
    };
  }

  cancelEdit(): void {
    this.isEditing = false;
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }
}
