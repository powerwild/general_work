from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from app import db


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    ein = db.Column(db.Integer, nullable=False, unique=True)
    hashed_pasword = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_pasword


    @password.setter
    def password(self, password):
        self.hashed_pasword = generate_password_hash(password)


    def check_password(self, password):
        return check_password_hash(self.password, password)
