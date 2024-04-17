from flask import Flask, jsonify, request
from flask_cors import CORS
import logging
logging.basicConfig(level=logging.DEBUG)
import instaloader
import numpy as np
from instaloader.exceptions import TwoFactorAuthRequiredException

app = Flask(__name__)
CORS(app)

@app.route('/api/get-follower-count', methods=['POST'])
def handle_button_click():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    profile = None
    followers_list = []
    following_list = []
    
    try:
        L = instaloader.Instaloader()
        L.login(username, password) # Login or load session
        profile = instaloader.Profile.from_username(L.context, username) # Obtain profile metadata
    except TwoFactorAuthRequiredException:
        code = int(input()) # Same if I don't force it to be an int.
        L.two_factor_login( code )

       
    for follower in profile.get_followers():
        followers_list.append(follower.username)

    for followee in profile.get_followees():
        following_list.append(followee.username)

    follower_count = np.setdiff1d(following_list, followers_list).tolist() # Convert NumPy array to list

    return jsonify({'follower_count': follower_count})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)





