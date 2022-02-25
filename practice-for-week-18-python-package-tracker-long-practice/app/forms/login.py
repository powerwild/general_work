from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired

v = [InputRequired()]
class LoginForm(FlaskForm):
    name = StringField('Name', v)
    password = PasswordField('Password', v)
    submit = SubmitField('Login')
