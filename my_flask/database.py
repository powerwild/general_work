from book_app import app
from book_app.models import db, Author, Book, Publisher

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

    publisher1 = Publisher(name='Publisher 1', books=[book1, book2])
    publisher2 = Publisher(name='Publisher 2')
    publisher2.books.append(book2)

    db.session.add(publisher1)
    db.session.add(publisher2)

    db.session.commit()

    def update_by_id(id):
        book = Book.query.get(id)
        book.pages = 500
        db.session.commit()


    def delete_by_id(id):
        book = Book.query.get(id)
        db.session.delete(book)
        db.session.commit()
