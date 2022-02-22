from flask import Blueprint, render_template
import psycopg2

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
            def create_books_table():
                curs.execute(
                    """
                CREATE TABLE books (
                    id SERIAL PRIMARY KEY,
                    title VARCHAR(50),
                    author VARCHAR(50)
                );
                """
                )


            def add_book(title, author):
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


            def get_all_books():
                curs.execute(
                    """
                    SELECT * FROM books
                    """
                )
                return curs.fetchall()


            create_books_table()
            add_book('Alice in Wonderland', 'Lewis Carroll')
            results = get_all_books()
            return render_template('all_books.html', all_books=results)
