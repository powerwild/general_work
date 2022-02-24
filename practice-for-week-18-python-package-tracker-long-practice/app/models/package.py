from app import db
from map.map import advance_delivery, DELIVERED

class Package(db.Model):
    __tablename__ = 'packages'

    id = db.Column(db.Integer, primary_key=True)
    sender = db.Column(db.String(255), nullable=False)
    recipient = db.Column(db.String(255), nullable=False)
    origin = db.Column(db.String(255), nullable=False)
    destination = db.Column(db.String(255), nullable=False)
    location = db.Column(db.String(255), nullable=False)
    chose_express = db.Column(db.Boolean, default=False)


    @staticmethod
    def advance_all_locations():
        packages = Package.query.all()
        for pack in packages:
            if pack.location is not DELIVERED:
                pack.location = advance_delivery(pack.location, pack.destination)
        db.session.commit()
