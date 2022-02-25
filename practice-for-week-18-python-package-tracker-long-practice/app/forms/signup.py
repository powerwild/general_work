from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, EqualTo

v = [InputRequired()]
class SignupForm(FlaskForm):
    name = StringField('Name', v)
    password = PasswordField('Password', v)
    confirm_password = PasswordField('Confirm Password', validators=[InputRequired(), EqualTo('password')])
    submit = SubmitField('Signup')
