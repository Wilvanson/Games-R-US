from app.models import db, Chart

def seed_charts():

    c1 = Chart(user_id= 1, item_id= 1)
    c2 = Chart(user_id= 2, item_id= 1)
    c3 = Chart(user_id= 1, item_id= 2)
    c4 = Chart(user_id= 1, item_id= 3)
    c5 = Chart(user_id= 2, item_id= 3)
    c6 = Chart(user_id= 3, item_id= 5)
    
    

    db.session.add(c1)
    db.session.add(c2)
    db.session.add(c3)
    db.session.add(c4)
    db.session.add(c5)
    db.session.add(c6)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_charts():
    db.session.execute('TRUNCATE charts RESTART IDENTITY CASCADE;')
    db.session.commit()