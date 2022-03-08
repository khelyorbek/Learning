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
class Pet(db.Model):
    """Pet."""
    # Dunder for creating a table
    __tablename___ = "pets"

    # Changing the output that we get when an object is instantiated
    def __repr__(self):
        p = self
        return f"<Pet id={p.id} name={p.name} species={p.species} hunger={p.hunger}>"

    # Defining the columns
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50),nullable=False,unique=True)
    species = db.Column(db.String(30),nullable=True, default=20)
    breed = db.Column(db.String(30), nullable=True)
    hunger = db.Column(db.Integer,nullable=False,default=20)

# USING OUR MODEL
# Ye BOII
