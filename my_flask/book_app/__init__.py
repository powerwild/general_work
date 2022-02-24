from flask import Flask, render_template, redirect
from book_app.config import Config
from book_app.routes.book_routes import book_router
from book_app.forms.login import LoginForm
from book_app.models.db import db
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)

app.register_blueprint(book_router, url_prefix='/books')


db.init_app(app)

Migrate(app, db)

@app.route('/')
def index():
    my_list = [1, 2, 3]
    views = session.get('views')
    if views is not None:
        session['views'] += 1
    else:
        session['views'] = 1
    return render_template('index.html', display_item=my_list, title='Flask App', views=views)


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        return redirect('/')
    return render_template('login.html', form=form)
