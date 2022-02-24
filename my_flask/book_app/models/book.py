from book_app.models.db import db
from book_app.models.publishers_books import publishers_books

class Book(db.Model):
    __tablename__ = 'books'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    pages = db.Column(db.Integer)
    author_id = db.Column(db.Integer, db.ForeignKey('authors.id'))
    author = db.relationship('Author', back_populates='books')

    publishers = db.relationship('Publisher', back_populates='books', secondary=publishers_books)


    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'pages': self.pages,
            'author_id': self.author_id,
            'author': self.author.name,
            'publishers': [(pub.id, pub.name, pub.city) for pub in self.publishers]
        }
