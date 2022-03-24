from email.mime import image
from pydoc import describe
from app.models import db, Item

def seed_items():

    i1 = Item(in_stock=10, name= 'Call of Duty:Vanguard', type='Video Game', cost=60, description= 'The game portrays the rise of special forces, with the first tasked to uncover a secret Nazi project and thwart it. The player takes control of various members of Task Force Vanguard, a team formed by the Special Operations Executive to uncover Phoenix, a secret Nazi project',
     image='https://upload.wikimedia.org/wikipedia/en/0/06/Call_of_Duty_Vanguard_cover_art.jpg')
    i2 = Item(in_stock=6, name= 'Tony Hawks Pro Skater 1 + 2', type='Video Game', cost=40, description= 'Tony Hawks Pro Skater 1 + 2 is a skateboarding video game played in a third-person view with its gameplay oriented towards classic arcade games. As such, the goal of most modes of the game is to achieve a high score or collect certain objects.',
     image='https://upload.wikimedia.org/wikipedia/en/8/8f/Tony_Hawk_Pro_Skater_Remaster_cover_art.png')
    i3 = Item(in_stock=1, name= 'Xbox Series X', type='Console', cost=500, description= 'The Xbox Series X has higher end hardware and supports higher display resolutions (up to 8K resolution), along with higher frame rates and real-time ray tracing; it also has a high-speed solid-state drive to reduce loading times.',
     image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thumbnail-series-x-front-1604403362.png?crop=0.5626666666666666xw:1xh;center,top&resize=980:*')
    i4 = Item(in_stock=2, name= 'Playstation 5', type='Console', cost=800, description= 'The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, with worldwide release following a week later.',
     image='https://i5.walmartimages.com/asr/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png')
    i5 = Item(in_stock=12, name= 'PlayStation 5 Controller', type='Accessories', cost=50, description= 'The DualSense wireless controller for PS5 offers immersive haptic feedback2, dynamic adaptive triggers2 and a built-in microphone, all integrated into an iconic design.',
     image='https://m.media-amazon.com/images/I/612bjwBuobS._SL1500_.jpg')
    i6 = Item(in_stock=12, name= 'Xbox Gaming Headset', type='Accessories', cost=120, description= 'The Xbox 360 Wireless Headset is a wireless headset designed for the Xbox 360 and Xbox Live; it is manufactured by Microsoft. It can be used for in game voice chat, private chat, audio for video chat and in game voice recognition. Up to four wireless headsets can be used simultaneously on a single Xbox 360.',
     image='https://compass-ssl.xbox.com/assets/ef/0b/ef0bc2f8-526e-45bb-85cc-7c7428ca63a7.jpg?n=2100499_gallery_2_1056x594.jpg')
    i7 = Item(in_stock=15, name='Nintendo Switch OLED', type='Console', image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470923cv11d.jpg', cost=399, description='Introducing the newest member of the Nintendo Switch family Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen with the Nintendo Switch OLED Model system. In addition to a new screen with vivid colors and sharp contrast, the Nintendo Switch OLED Model includes a wide adjustable stand for more comfortable viewing angles, a dock with a wired LAN port for TV mode (LAN cable sold separately), 64GB of internal storage, and enhanced audio in Handheld and Tabletop modes using the systems speakers.')
    i8 = Item(in_stock= 20, name='Mario Kart', type='Video Game', image='https://cdn.vox-cdn.com/thumbor/E2lbwfV51V0fMJhmUDatasLw00U=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15985293/NintendoSwitch_MarioKart8Deluxe_artwork_char_01_png_jpgcopy.jpg', cost= 20, description='Mario Kart is a series of racing games developed and published by Nintendo. Players compete in go-kart races while using various power-up items. It features characters and courses from the Mario series as well as other gaming franchises such as The Legend of Zelda, Animal Crossing, and Splatoon.')
    i9 = Item(in_stock=10, name='Elden Ring', type='Video Game', image='https://kbimages1-a.akamaihd.net/702893b9-5932-411c-88f6-49b1ed5c1cb6/353/569/90/False/the-overture-of-elden-ring.jpg', cost= 60, description='Elden Ring is an action role-playing game played in a third-person perspective with gameplay focusing on combat and exploration; it features elements similar to those found in other games developed by FromSoftware, such as the Souls series, Bloodborne, and Sekiro: Shadows Die Twice.')
    i10 = Item(in_stock=100, name='Fortnite Battle Royale', type='Video Game', image='https://i.ytimg.com/vi/JdeClWe1Tnw/maxresdefault.jpg', cost= 5, description='Fortnite is a survival game where 100 players fight against each other in player versus player combat to be the last one standing. It is a fast-paced, action-packed game, not unlike The Hunger Games, where strategic thinking is a must in order to survive.')
    i11 = Item(in_stock=5, name='BlueFinger Backlit Gaming Keyboard and Mouse Combo', type='Accessories', image='https://m.media-amazon.com/images/I/710Lu1ezuDL._AC_SX679_.jpg', cost= 35, description='BlueFinger crack backlit keyboard all 114 Keycap glow.10 Multimedia keys make it quickly access to media volume calculator etc; 19 non-conflict keys allows you to press or hold multiple keys simultaneously.The ergonomic designed keyboard with 2 adjustable rear feets and 2 non-slip rubber pads, provides comfortable typing experience.')
    i12 = Item(in_stock=30, name='Blue light glasses', type='Accessories', image='https://i5.walmartimages.com/asr/2a8cc5f9-62e8-481f-a2af-da42db182d4b_1.4ed8d752269a589b6908291f921b78b4.jpeg', cost= 10, description='Blue light glasses are treated to filter out blue light to effectively block the transmission of a range of wavelengths emitted from devices. Many times, these glasses are also treated to prevent glare to further lessen the strain on the eyes, explained All About Vision.')
    i13 = Item(in_stock=7, name='Gaming chair', type='Accessories', image='https://i5.walmartimages.com/asr/74cd68aa-6e7c-4067-aebe-3932819ad252_1.d23e019c221965f2f71335473154626f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', cost= 130, description='A gaming chair is a type of chair designed for the comfort of gamers. They differ from most office chairs in having high backrest designed to support the upper back and shoulders. They are also more customizable: the armrests, back, lumbar support and headrest can all be adjusted for comfort and efficiency.')
    i14 = Item(in_stock=15, name='Super Smash Bros Ultimate', type='Video Game', image='https://www.smashbros.com/assets_v2/img/movie/20180613_1.jpg', cost= 40, description='Super Smash Bros. is a crossover fighting game series published by Nintendo, and primarily features characters from various Nintendo franchises. The series was created by Masahiro Sakurai, who has directed every game in the series.')
    i15 = Item(in_stock=5, name='Marvels Spider-Man: Miles Morales', type='Video Game', image='https://i.ytimg.com/vi/JsNgEBb4ZD0/maxresdefault.jpg', cost= 40, description='In the latest adventure in the Marvels Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvels New York, Miles must take up the mantle of Spider-Man and own it.')

    db.session.add(i1)
    db.session.add(i2)
    db.session.add(i3)
    db.session.add(i4)
    db.session.add(i5)
    db.session.add(i6)
    db.session.add(i7)
    db.session.add(i8)
    db.session.add(i9)
    db.session.add(i10)
    db.session.add(i11)
    db.session.add(i12)
    db.session.add(i13)
    db.session.add(i14)
    db.session.add(i15)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()