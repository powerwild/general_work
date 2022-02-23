from book_app import app
from book_app.models import db, Author, Book

with app.app_context():
    #will be replaced with migrations
    db.drop_all()
    db.create_all()

    book1 = Book(title='Alice in Wonderland', pages=300)
    book2 = Book(title='The Little Prince')

    db.session.add(book1)
    db.session.add(book2)

    author1 = Author(name='Lewis Carroll', books=[book1])
    author2 = Author(name='Antoine de Saint-Exupery')
    author2.books.append(book2)

    db.session.add(author1)
    db.session.add(author2)

    db.session.commit()
