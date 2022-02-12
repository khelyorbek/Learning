from app import app
from unittest import TestCase
# 1st app is the name of the py file
# 2nd app is the app variable tied to Flask
from flask import session

# Helps us get real python errors
app.config['TESTING'] = True
# Stopping the flask debug toolbar from working during unit tests
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']


class ColorViewsTestCase(TestCase):

    # runs only once before ANYTHING
    @classmethod
    def setUpClass(cls):
        print("INSIDE SET UP CLASS")
        
    # runs only once after ANYTHING
    @classmethod
    def tearDownClass(cls):
        print("INSIDE TEAR DOWN CLASS")

    # runs before EACH method
    def setUp(self):
        print("INSIDE SET UP")

    # runs after EACH method
    def tearDown(self):
        print("INSIDE TEAR DOWN")

    def test_color_form(self):
        # starts the test version of the flask server
        with app.test_client() as client:
            # any code here will have access to 'client' which is the server
            
            res = client.get('/')

            # gets the HTML data
            html = res.get_data(as_text=True)
            
            self.assertEqual(res.status_code,200)
            # Specify the string (also works with list and other collections) and python will check if its inside something
            self.assertIn('<h1>Color Form</h1>',html)
    
    def test_color_submit(self):
        with app.test_client() as client:
            # making the post request
            # and passing the data set in the data={}
            res = client.post('/fav-color', data={'color': 'orange'})

            # Getting the html as text and putting it into a variable
            html = res.get_data(as_text=True)

            # Making sure that the request return code 200
            self.assertEqual(res.status_code,200)

            # Checking if this string exists in the html variable
            self.assertIn('<h3>Woah! I like orange, too</h3>', html)

    
    def test_redirection(self):
        with app.test_client() as client:
            res = client.get('/redirect-me')

            # 302 is a redirect code. checkign to make sure we get it
            self.assertEqual(res.status_code, 302)

            # If we add :5000 port at the back, test will not pass
            # If we check http://127.0.0.1, test will not pass
            # Quirk of how flask app.test_client() is
            # START ERROR:
            # - http://localhost/
            # + http://127.0.0.1
            # END ERROR:
            # Its not actuall creating a server port :5000, its just creating a server on localhost default ports 80 or 443 
            # We need to just check http://localhost/ in general
            # Must be exactly http://localhost/
            self.assertEqual(res.location,'http://localhost/')

    def test_redirection_followed(self):
        with app.test_client() as client:
            # follow_redirects=True allows us to follow redirects
            # useful in making sure we are getting to the right place
            res = client.get('/redirect-me',follow_redirects=True)

            # Getting the html as text and putting it into a variable
            html = res.get_data(as_text=True)

            # since we are now following redirect to final destination,
            # we no longer ger 302 code but the 200code from final html page
            # if we expect any other code, will error out. Example 404
            # AssertionError: 200 != 404
            self.assertEqual(res.status_code, 200)

            # Specify the string (also works with list and other collections) and python will check if its inside something
            self.assertIn('<h1>Color Form</h1>',html)

    def test_session_count(self):
        with app.test_client() as client:
            res = client.get('/')

            self.assertEqual(res.status_code,200)
            # testing if when we first open the page, count gets set to 1
            self.assertEqual(session['count'],1)

    def test_session_count_set(self):
        with app.test_client() as client:
            with client.session_transaction() as change_session:
                # setting the count cookie to 999
                change_session['count'] = 999

            # opening the page which should change the iterator to 1000
            res = client.get('/')

            self.assertEqual(res.status_code,200)
            self.assertEqual(session['count'],1000)
