from app.models import db, Item

def seed_items():

    i1 = Item(in_stock=10, name= 'Call of Duty:Vanguard', type='Video Game', cost=60, description= 'The game portrays the rise of special forces, with the first tasked to uncover a secret Nazi project and thwart it. The player takes control of various members of Task Force Vanguard, a team formed by the Special Operations Executive to uncover Phoenix, a secret Nazi project',
     image='https://upload.wikimedia.org/wikipedia/en/0/06/Call_of_Duty_Vanguard_cover_art.jpg')
    i2 = Item(in_stock=6, name= 'Tony Hawks Pro Skater 1 + 2', type='Video Game', cost=40, description= 'Tony Hawks Pro Skater 1 + 2 is a skateboarding video game played in a third-person view with its gameplay oriented towards classic arcade games. As such, the goal of most modes of the game is to achieve a high score or collect certain objects.',
     image='https://upload.wikimedia.org/wikipedia/en/8/8f/Tony_Hawk_Pro_Skater_Remaster_cover_art.png')
    i3 = Item(in_stock=1, name= 'Xbox Series X', type='Console', cost=500, description= 'The Xbox Series X has higher end hardware and supports higher display resolutions (up to 8K resolution), along with higher frame rates and real-time ray tracing; it also has a high-speed solid-state drive to reduce loading times.',
     image='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Fstory%2Fxbox-series-x-series-s-tips-and-features%2F&psig=AOvVaw3bjWtzD6CcM6nSKTH_hvyO&ust=1647490037991000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjGxOXgyfYCFQAAAAAdAAAAABAK')
    i4 = Item(in_stock=2, name= 'Playstation 5', type='Console', cost=800, description= 'The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, with worldwide release following a week later.',
     image='https://i5.walmartimages.com/asr/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png')
    i5 = Item(in_stock=12, name= 'PlayStation 5 Controller', type='Accessories', cost=50, description= 'The DualSense wireless controller for PS5 offers immersive haptic feedback2, dynamic adaptive triggers2 and a built-in microphone, all integrated into an iconic design.',
     image='https://m.media-amazon.com/images/I/612bjwBuobS._SL1500_.jpg')
    i6 = Item(in_stock=12, name= 'Xbox Gaming Headset', type='Accessories', cost=120, description= 'The Xbox 360 Wireless Headset is a wireless headset designed for the Xbox 360 and Xbox Live; it is manufactured by Microsoft. It can be used for in game voice chat, private chat, audio for video chat and in game voice recognition. Up to four wireless headsets can be used simultaneously on a single Xbox 360.',
     image='https://compass-ssl.xbox.com/assets/ef/0b/ef0bc2f8-526e-45bb-85cc-7c7428ca63a7.jpg?n=2100499_gallery_2_1056x594.jpg')
    

    db.session.add(i1)
    db.session.add(i2)
    db.session.add(i3)
    db.session.add(i4)
    db.session.add(i5)
    db.session.add(i6)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()