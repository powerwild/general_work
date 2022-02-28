from flask import Flask, render_template, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app.config import Configuration
from app.forms import SimpleForm


app = Flask(__name__)

app.config.from_object(Configuration)

db = SQLAlchemy(app)
migrate = Migrate(app, db)




@app.route('/simple-form')
def simple_form():
    form = SimpleForm()
    return render_template('simple_form.html', form=form)
