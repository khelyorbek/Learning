# Must have
from flask import Flask, request
# also must have venv with flask installed

# will about dunder name later
app = Flask(__name__)

# won't do much by itself
@app.route('/hello')
def say_hello():
    html = """
    <html>
        <body>
            <h1>Hello</h1>
            <p>This is the hello page</p>
        </body>
    </html>
    """
    return html

@app.route('/goodbye')
def say_bye():
    return "Good Bye!!!"

# defining behavior for / home page
@app.route('/')
def home_page():
    html = """
    <html>
        <body>
            <h1>Home Page</h1>
            <p>Welcome to my simple app!</p>
            <a href='/hello'>Go to Hello Page</a>
        </body>
    </html>
    """
    return html

@app.route('/search')
def search():
    # Will be filled with information passed from the query string
    term = request.args['term']
    sort = request.args['sort']
    return f"<h1>Search results for: {term}</h1><p>Sorting by: {sort}</p>"

# @app.route('/post',methods=["POST"])
# def post_demo():
#     return "YOU MADE A POST REQUEST"

# @app.route('/post',methods=["GET"])
# def get_demo():
#     return "YOU MADE A GET REQUEST"

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