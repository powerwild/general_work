from flask import Flask, render_template
from app.config import Config
from app.routes.flask_routes import flask_router
from app.forms.login import LoginForm

app = Flask(__name__)
app.config.from_object(Config)

app.register_blueprint(flask_router, url_prefix='/books')

@app.route('/')
def index():
    my_list = [1, 2, 3]
    return render_template('index.html', display_item=my_list, title='Flask App')


@app.route('/login')
def login():
    form = LoginForm()
    return render_template('login.html', form=form)
