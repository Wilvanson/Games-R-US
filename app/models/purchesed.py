from email.policy import default
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

class Purchesed(db.Model, UserMixin):
    __tablename__ = 'purchesed'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'), nullable=False)
    item_id = db.Column(db.Integer,db.ForeignKey('items.id'), nullable=False)
    amount = db.Column(db.Integer, default=1)

    users = db.relationship("User", back_populates="purcheses" )
    items = db.relationship("Item", back_populates="purcheses" )

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id
        }