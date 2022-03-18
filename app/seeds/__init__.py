from flask.cli import AppGroup
from .users import seed_users, undo_users
from .items import seed_items, undo_items
from .comments import seed_comments, undo_comments
from .charts import seed_charts, undo_charts
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_items()
    seed_comments()
    seed_charts()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_items()
    undo_comments()
    undo_charts()
    # Add other undo functions here
