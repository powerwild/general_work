from flask import Flask, render_template, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.config import Config
from app.forms import ShippingRequestForm

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy()
db.init_app(app)
migrate = Migrate(app, db)

from app.models import Package


@app.route('/')
def index():
    packages = Package.query.all()
    return render_template('package_status.html', title='Package Tracker', packages=packages)


@app.route('/new_package', methods=['GET', 'POST'])
def new_package():
    form = ShippingRequestForm()
    if form.validate_on_submit():
        package = Package(
            sender=form.data['sender'],
            recipient=form.data['recipient'],
            origin=form.data['origin'],
            destination=form.data['destination'],
            location=form.data['origin'],
            chose_express=form.data['chose_express']
        )
        db.session.add(package)
        db.session.commit()
        Package.advance_all_locations()
        return redirect('/')
    if form.errors:
        return form
    return render_template('shipping_request.html', form=form)
