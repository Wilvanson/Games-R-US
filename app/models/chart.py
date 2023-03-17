from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

class Chart(db.Model, UserMixin):
    __tablename__ = 'charts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    item_id = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod('items.id')), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    users = db.relationship("User", back_populates="charts" )
    items = db.relationship("Item", back_populates="charts" )

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id
        }
