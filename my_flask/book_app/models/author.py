from book_app.models.db import db

class Author(db.Model):
    __tablename__ = 'authors'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    books = db.relationship('Book', back_populates='author', cascade='all, delete')


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'books': [(book.id, book.title, book.pages) for book in self.books]
        }
