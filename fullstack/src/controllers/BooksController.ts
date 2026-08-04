import type { Request, Response } from 'express';
import { books } from '../data/Books.js';
import { Book } from '../models/Book.js';

export class BooksController {
    static index(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Books";
    viewData["books"] = books;

    res.render('books/index', { viewData: viewData });
  }

  static showBook(req: Request, res: Response): void {
    const id = Number(req.params.id);
    const book = Book.findById(books, id);
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Book Details";
    viewData["book"] = book;

    res.render('books/show', { viewData: viewData });
  }
}