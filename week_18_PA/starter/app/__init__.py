from flask import Flask, render_template, redirect
from app.config import Configuration
from app.forms import SimpleForm
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

app.config.from_object(Configuration)

db = SQLAlchemy()
db.init_app(app)
migrate = Migrate(app, db)

from app.models import SimplePerson

@app.route('/')
def index():
    return render_template('main_page.html')



@app.route('/simple-form')
def simple_form():
    form = SimpleForm()
    return render_template('simple_form.html', form=form)


@app.route('/simple-form', methods=['POST'])
def submit_simple_form():
    form = SimpleForm()
    if form.validate_on_submit():
        new_person = SimplePerson(
            name=form.data['name'],
            age=form.data.get('age'),
            bio=form.data.get('bio')
        )
        db.session.add(new_person)
        db.session.commit()
        return redirect('/')
    if form.errors:
        return 'Bad Data'


@app.route('/simple-form-data')
def simple_form_data():
    people = SimplePerson.query.filter(SimplePerson.name.startswith('M')).all()
    return render_template('simple_form_data.html', people=people)
