"""Used for PostgreSQL connection configuration"""
# Importing SQLA
from flask_sqlalchemy import SQLAlchemy

# Mapping SQLA to a variable
db = SQLAlchemy()

# In additiona mapping the 2 item below into a function
def connect_db(app):
    # Mapping SQLA to our Flask app
    db.app = app
    # Initializing the DB connection to our Flask App
    db.init_app(app)


# MODELS GO BELOO! (Patterns / Schema)