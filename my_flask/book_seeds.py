import psycopg2


CONNECTION_PARAMETERS = {
    'dbname': 'widgets_database',
    'user': 'widgets_user',
    'password': 'password'
}



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

            create_books_table()
            add_book('Alice in Wonderland', 'Lewis Carroll')
