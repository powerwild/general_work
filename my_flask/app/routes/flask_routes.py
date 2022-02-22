from flask import Blueprint, render_template, redirect
import psycopg2
from app.forms.new_book_form import NewBookForm

flask_router = Blueprint('books', __name__)

CONNECTION_PARAMETERS = {
    'dbname': 'widgets_database',
    'user': 'widgets_user',
    'password': 'password'
}


@flask_router.route('/')
def all_books():
    with psycopg2.connect(**CONNECTION_PARAMETERS) as conn:
        with conn.cursor() as curs:
            def get_all_books():
                curs.execute(
                    """
                    SELECT * FROM books
                    """
                )
                return curs.fetchall()



            results = get_all_books()
            return render_template('all_books.html', all_books=results)



@flask_router.route('/new_book', methods=['GET', 'POST'])
def new_book():
    form = NewBookForm()

    if form.validate_on_submit():
        title = form.data['title']
        author = form.data['author']

        with psycopg2.connect(**CONNECTION_PARAMETERS) as conn:
        with conn.cursor() as curs:
            curs.execute(
                """
                INSERT INTO books (title, author)
                VALUES (%(title)s, %(author)s)
                """,
                {
                    'title': title,
                    'author': author
                }
            )
        return redirect('/books')

    if form.errors:
        return form.errors

    return render_template('new_book.html', form=form)
