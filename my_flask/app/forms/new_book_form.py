from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField
from wtforms.validators import DataRequired


class NewBookForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    author = StringField('Author', validators=[DataRequired()])
    rating = SelectField('Rating', choices=[1, 2, 3, 4, 5] validators=[DataRequired()])
    submit = SubmitField('Add Book')
