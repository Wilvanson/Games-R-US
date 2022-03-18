from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, Chart, Item, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/chart')
@login_required
def chart(id):
    charts = Chart.query.filter(Chart.user_id == id).all()
    items = []
    for item in charts:
        ite = Item.query.get(item.item_id)
        items.append(ite.to_dict())
    return {'items': items}


@user_routes.route('/<int:id>/chart', methods=['POST'])
@login_required
def addchart(id):
    bodys = request.json
    body = bodys['newitem']
    item = body['item_id']
    items = Chart(user_id= id, item_id= item)

    
    db.session.add(items)
    db.session.commit()
    return items.to_dict()


@user_routes.route('/<int:id>/chart/delete', methods=['POST'])
@login_required
def deletechart(id):
    bodys = request.json
    ids = bodys['ids']
    # print('\n \n ', bodys,'\n \n')
    chart = Chart.query.get(ids)
    db.session.delete(chart)
    db.session.commit()
    return {'id': ids}