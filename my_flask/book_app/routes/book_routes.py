from flask import Blueprint, render_template, redirect
import psycopg2
from book_app.forms.new_book_form import NewBookForm
from book_app.models import Book, Author, db

book_router = Blueprint('books', __name__)

CONNECTION_PARAMETERS = {
    'dbname': 'widgets_database',
    'user': 'widgets_user',
    'password': 'password'
}


@book_router.route('/')
def all_books():
    all_books = Book.query.all()
    all_books_list = { book.to_dict() for book in all_books }
    return {'all_books': all_books_list}
    # return render_template('all_books.html', all_books=all_books)


@book_router.route('/<int:id>')
def get_book_by_id(id):
    one_book = Book.query.get(id)
    return {'one_book': one_book.to_dict()}
    # return render_template('book_info.html', book=one_book)


@book_router.route('/starts_with_a')
def a_books():
    books = Book.query.filter(Book.title.like('A%')).all()
    return render_template('all_books.html', all_books=books)


@book_router.route('/pages_over_100')
def pages_over_100():
    authors = Author.query.join(Book).filter(Book.pages >= 100).all()
    return render_template('author_info.html', authors=authors)


@book_router.route('/new_book', methods=['GET', 'POST'])
def new_book():
    form = NewBookForm()

    if form.validate_on_submit():
        new_book = Book(title=form.data['title'], pages=form.data['pages'])
        db.session.add(new_book)
        db.session.commit()
        return new_book.to_dict()

    if form.errros:
        return form.errors


    # if form.validate_on_submit():
    #     title = form.data['title']
    #     author = form.data['author']

    #     with psycopg2.connect(**CONNECTION_PARAMETERS) as conn:
    #         with conn.cursor() as curs:
    #             curs.execute(
    #                 """
    #                 INSERT INTO books (title, author)
    #                 VALUES (%(title)s, %(author)s)
    #                 """,
    #                 {
    #                     'title': title,
    #                     'author': author
    #                 }
    #             )
    #     return redirect('/books')

    # if form.errors:
    #     return form.errors

    return render_template('new_book.html', form=form)
