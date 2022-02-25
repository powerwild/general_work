from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField, SubmitField
from wtforms.validators import InputRequired


class SimpleForm(FlaskForm):
    name = StringField('Name', validators=[InputRequired()])
    age = IntegerField('Age')
    bio = TextAreaField('Biography')
    submit = SubmitField('Submit')
