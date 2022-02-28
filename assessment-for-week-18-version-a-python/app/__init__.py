from flask import Flask, render_template, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.config import Configuration
from app.forms import NewInstrument


app = Flask(__name__)
app.config.from_object(Configuration)
db = SQLAlchemy(app)
from app.models import Instrument

migrate = Migrate(app, db)


@app.route('/')
def home():
    return render_template('main_page.html')



@app.route('/new_instrument', methods=['GET'])
def new_instrument():
    form = NewInstrument()
    return render_template('simple_form.html', form=form)


@app.route('/new_instrument', methods=['POST'])
def new_instrument_submit():
    form = NewInstrument()
    if form.validate_on_submit():
        sub_instrument = Instrument(
            date_bought=form.data['date_bought'],
            nickname=form.data['nickname'],
            year=form.data.get('year'),
            maker=form.data.get('maker'),
            type=form.data['type'],
            used=form.data['used']
        )
        db.session.add(sub_instrument)
        db.session.commit()
        return redirect('/instrument_data')
    if form.errors:
        return 'Bad Data'



@app.route("/instrument_data")
def instrument_data():
    instruments = Instrument.query.filter(Instrument.nickname.startswith('M')).all()
    print(instruments)
    return render_template('simple_form_data.html', instruments=instruments)
