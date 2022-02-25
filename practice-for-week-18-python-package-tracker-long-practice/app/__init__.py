from flask import Flask, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.config import Config
from app.forms import ShippingRequestForm, LoginForm, SignupForm
from flask_login import LoginManager, current_user, login_user, logout_user, login_required

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy()
db.init_app(app)
migrate = Migrate(app, db)
login = LoginManager(app)

from app.models import Package, User

login.login_view = 'login'
@login.user_loader
def load_user(id):
    return User.query.get(int(id))


@app.route('/')
@login_required
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



@app.route('/signup', methods=['GET', 'POST'])
def signup():
    form = SignupForm()

    if form.validate_on_submit():
        new_user = User(
            name=form.data['name'],
            ein=form.data['ein'],
            password=form.data['password']
        )
        db.session.add(new_user)
        db.session.commit()
        user = User.query.filter(User.ein == new_user.ein).first()
        login_user(user)
        return redirect('/')
    if form.errors:
        return render_template('signup.html', form=form)

    return render_template('signup.html', form=form)



@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for("index"))
    form = LoginForm()
    if form.validate_on_submit():
        empl_number = form.data['ein']
        user = User.query.filter(User.ein == empl_number).first()
        if not user.check_password(form.data['password']):
            return form.errors
        if not user:
            return redirect('/signup')
        login_user(user)
        return redirect(url_for("index"))
    return render_template("login.html", form=form)


@app.route('/logout', methods=['POST'])
def logout():
    logout_user()
    return redirect(url_for('login'))
