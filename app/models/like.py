from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

class Like(db.Model, UserMixin):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'), nullable=False)
    item_id = db.Column(db.Integer,db.ForeignKey('items.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    users = db.relationship("User", back_populates="likes")
    items = db.relationship("Item", back_populates="likes")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id
        }