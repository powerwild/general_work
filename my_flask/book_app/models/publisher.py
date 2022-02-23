from book_app.models import db
from book_app.models.publishers_books import publishers_books

class Publisher(db.Model):
    __tablename__ = 'publishers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)

    books = db.relationship('Book', back_populates='publishers', secondary=publishers_books)
