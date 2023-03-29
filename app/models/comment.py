from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

class Comment(db.Model, UserMixin):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'), nullable=False)
    item_id = db.Column(db.Integer,db.ForeignKey('items.id'), nullable=False)
    description = db.Column(db.String(5000), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    users = db.relationship("User", back_populates="comments" )
    items = db.relationship("Item", back_populates="comments" )

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'description': self.description
        }