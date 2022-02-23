from book_app.models import db

publishers_books = db.Table(
    'publishers_books',
    db.Column('book_id', db.Integer, db.ForeignKey('books.id'), primary_key=True, nullable=False),
    db.Column('publisher_id', db.Integer, db.ForeignKey('publishers.id'), primary_key=True, nullable=False)
)
