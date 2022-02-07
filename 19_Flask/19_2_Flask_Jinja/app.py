from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from random import randint, choice, sample

# will about dunder name later
app = Flask(__name__)
# relies on app being defined. used for sesions
app.config['SECRET_KEY'] = "chickensarecool123456789"
# Instantiating the Debug Toolbar
debug = DebugToolbarExtension(app)

# defining behavior for / home page
@app.route('/')
def home_page():
    return render_template('home.html')

# Get request
@app.route('/form')
def show_form():
    return render_template('form.html')

# Creating a list with a bunch of compliments we can output later
COMPLIMENTS = ['cool','clever','awesome','great','tenacious','outstanding']

@app.route('/greet')
def get_greeting():
    # Getting the value of the username= from the form
    username = request.args["username"]
    # Getting 1 random item from the COMPLIMENTS list
    nice_thing = choice(COMPLIMENTS)
    # Passing that username into the html page as username
    return render_template('greet.html', username=username, compliment=nice_thing)

@app.route('/form-2')
def show_form_2():
    return render_template('form-2.html')

@app.route('/greet-2')
def get_greeting_2():
    # Getting the value of the username= from the form
    username = request.args["username"]
    # Getting the value of the wants_compliments. Must use .get because if we don't and the value is not passed, flask will error out because the arg is missing
    wants = request.args.get("wants_compliments")

    # Getting 1 random item from the COMPLIMENTS list
    nice_things = sample(COMPLIMENTS,3)

    # Passing that username into the html page as username
    return render_template('greet-2.html', username=username, wants_compliments=wants, compliments=nice_things)

@app.route('/lucky')
def lucky_number():
    num = randint(1,10)
    # stored in templates/lucky.html
    # passing the num into the template as lucky_num
    return render_template('lucky.html',lucky_num = num, msg="You are so lucky!")

# setting a new route to open HTML template and the last <word> will be passed as variable
@app.route('/spell/<word>')
def spell_word(word):
    caps_word = word.upper()
    return render_template('spell_word.html', word=caps_word)

@app.route('/hello')
def say_hello():
    """Shows hello page"""
    return render_template("hello.html")

@app.route('/goodbye')
def say_bye():
    return "Good Bye!!!"

@app.route('/search')
def search():
    # Will be filled with information passed from the query string
    term = request.args['term']
    sort = request.args['sort']
    return f"<h1>Search results for: {term}</h1><p>Sorting by: {sort}</p>"

@app.route('/add-comment')
def add_comment_form():
    return """
        <h1>Add Comment</h1>
        <form method="POST">
            <input type='text' placeholder='comment' name='comment'/>
            <input type='text' placeholder='username' name='username'/>
            <button>Submit</button>
        </form>
    """

@app.route('/add-comment',methods=["POST"])
def save_comment():
    comment = request.form["comment"]
    username = request.form["username"]
    return f"""
    <h1>SAVED YOUR COMMENT!</h1>
    <ul>
        <li>Username: {username}</li>
        <li>Comment: {comment}</li>
    </ul>
    """

# Because we have the variable in the route, Flask will try to automatically pass it into the show_subreddit() method
# Will try to be passed as keyword argument. ex: show_subreddit(<subreddit>)
# But it will error out. To solve that error, we MUST pass an argument with the EXACT NAME inside our method that we just created
@app.route('/r/<subreddit>')
def show_subreddit(subreddit):
    return f"<h1>Browsing {subreddit} subreddit.</h1>"

@app.route('/r/<subreddit>/comments/<post_id>')
def show_comments(subreddit,post_id):
    return f"<h1>Viewing comments for post with id: {post_id} from the {subreddit} subreddit.</h1>"

POSTS = {
    1: "We are no strangers to love",
    2: "You know the rules",
    3: "And so do I",
    4: "Never gonna give you up",
    5: "Never gonna let you down"
}

# Passing the variable id of data type int
@app.route('/posts/<int:id>')
def find_post(id):
    # post = POSTS.[id]
    # ^ code above will error out if id is not found

    post = POSTS.get(id,"Post not found")
    return f"<p>{post}</p>"