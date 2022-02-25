from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db

app = Flask(__name__)

# Telling FLASK to use PostgreSQL. Important to configure this before the db = SQLAlchemy() portion below.
# Specifying which Database name to connect to (movies_example)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///movies_example'
# Supressing the warning that gets displayed every time we run our database connection
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# Printing all SQL statements to the console for debugging / learning
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "iliketoeatcheese400"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

# Executing our custom method we wrote in models.py to connect to a PostgreSQL database
connect_db(app)

@app.route('/')
def home_page():
    """Shows home page"""
    return render_template('home.html')

