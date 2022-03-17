from app.models import db, Comment

def seed_comments():

    c1 = Comment(user_id= 1, item_id= 1, description='This is a ok Call of duty compaired to previous years')
    c2 = Comment(user_id= 2, item_id= 1, description='I hate the Zombies for this call duty')
    c3 = Comment(user_id= 1, item_id= 2, description='I have not yet to beat the first park, please i need help')
    c4 = Comment(user_id= 1, item_id= 3, description='Best console in the world')
    c5 = Comment(user_id= 2, item_id= 3, description='PS5 is better')
    c6 = Comment(user_id= 3, item_id= 5, description='there are beter headset out there, but they are cheap')
    
    

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
def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()