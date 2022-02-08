import json
from flask import Flask, request, render_template, redirect, flash, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample

# will about dunder name later
app = Flask(__name__)
# relies on app being defined. used for sesions
app.config['SECRET_KEY'] = "chickensarecool123456789"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
# Instantiating the Debug Toolbar
debug = DebugToolbarExtension(app)

MOVIES = {'Amadeus','Chicken Run','Dances With Wolves','Insidious'}

# defining behavior for / home page
@app.route('/')
def home_page():
    return render_template('home.html')



@app.route('/old-home-page')
def redirect_to_home():
    """Redirects to new home page"""
    flash('That page has moved! This is our new home page!')
    return redirect("/")


@app.route('/movies')
def show_all_movies():
    """
    Show list of all movies in fake DB 
    """
    return render_template('movies.html',movies = MOVIES)

@app.route('/movies/json')
def get_movies_json():
    json_obj = jsonify(list(MOVIES))
    return  json_obj

@app.route('/movies/new', methods=["POST"])
def add_movie():
    title = request.form['title']
    
    # Add to Pretend DB
    if title in MOVIES:
        falash('Movie Already Exists!', 'error')
    else:
        MOVIES.add(title)
        flash("Created your movie", 'success')
    
    # import pdb
    # pdb.set_trace()
    return redirect('/movies')
