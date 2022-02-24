from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, BooleanField, SubmitField
from wtforms.validators import InputRequired
from map.map import map






class ShippingRequestForm(FlaskForm):
    sender = StringField('Sender', validators=[InputRequired()])
    recipient = StringField('Recipient', validators=[InputRequired()])
    origin = SelectField('Origin', choices=list(map), validate_choice=True)
    destination = SelectField('Destination', choices=list(map), validate_choice=True)
    chose_express = BooleanField('Express Shipping  (subject to extra fees)')
    submit = SubmitField('New Package')
