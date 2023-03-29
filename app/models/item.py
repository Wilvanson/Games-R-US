from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

class Item(db.Model, UserMixin):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    in_stock = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    type = db.Column(db.String(50), nullable=False)
    image = db.Column(db.Text, nullable=False)
    cost = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(5000), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    charts = db.relationship('Chart', back_populates="items", cascade='all, delete, delete-orphan')
    comments = db.relationship('Comment', back_populates="items", cascade='all, delete, delete-orphan')
    likes = db.relationship('Like', back_populates="items", cascade='all, delete, delete-orphan')
    purcheses = db.relationship('Purchesed', back_populates="items", cascade='all, delete, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
            'in_stock': self.in_stock,
            'description': self.description,
            'name': self.name,
            'cost': self.cost,
            'image': self.image
        }