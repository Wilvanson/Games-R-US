from crypt import methods
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Item, Comment, db

item_routes = Blueprint('items', __name__)


@item_routes.route('/')
@login_required
def items():
    items = Item.query.order_by(Item.id).all()
    return {'items':[item.to_dict() for item in items]}


@item_routes.route('/<int:id>')
@login_required
def item(id):
    item = Item.query.get(id)
    if(item):
        return item.to_dict()
    return {'id': 0,
            'name':'We do not have this item',
            'cost': 0,
            'in_stock': 0,
            'type': 'NaN',
            'description': "No Item Exist",
            'image':'https://th.bing.com/th?q=Sad+Frog+Cartoon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247'}


@item_routes.route('/<int:id>/comments')
@login_required
def comment(id):
    comments = Comment.query.filter(Comment.item_id == id).order_by(Comment.id.desc()).all()
    return {'comments': [comment.to_dict() for comment in comments]}


@item_routes.route('/<int:id>/comments', methods=['POST'])
@login_required
def addcomment(id):
    bodys = request.json
    body = bodys['newComment']
    user = body['user_id']
    description = body['description']
    comment = Comment(user_id= user, item_id= id, description=description)
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()


@item_routes.route('/<int:id>/comments/<int:commentId>/delete', methods=['POST'])
@login_required
def deletecomment(id, commentId):
    comment = Comment.query.get(commentId)
    db.session.delete(comment)
    db.session.commit()
    return {'id': commentId}


@item_routes.route('/<int:id>/comments/<int:commentId>/edit', methods=['POST'])
@login_required
def editcomment(id, commentId):
    body = request.json
    comment = Comment.query.get(commentId)
    comment.description = body['body']
    db.session.commit()
    return comment.to_dict()
    