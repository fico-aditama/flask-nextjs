from flask import Flask, jsonify
from flask_cors import CORS
import logging
logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)
CORS(app)

@app.route('/')
def main():
    return 'Hello World!'

@app.route('/api/user', methods=['GET'])
def return_user():
    return jsonify({
        'name': ['fico', 'mercy', 'adi'],
        'email': ['fico@gmail.com', 'mercy@gmail.com', 'adi@gmail.com']
    })

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)
