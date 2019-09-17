from flask import Flask, request, Response, make_response
from uuid import uuid4


def create_app(config):
    app = Flask(__name__)
    return app


app = create_app('')
messages = [{"id": 1, "text": "the text"}, {"id": 2, "text": "the text"}]


@app.route('/api/users', methods=['POST'])
def login():
    try:
        user_name = request.json['userName']
        user_id = uuid4()
        status_code = 200
    except (TypeError, KeyError):
        user_name = None
        user_id = None
        status_code = 400

    body = {
        "userName": user_name,
        "userId": user_id,
    }

    return make_response(body, status_code)


@app.route('/api/messages', methods=['GET'])
def get_messages():
    numbers = request.args.get('numbers', 0)
    print(numbers)
    status_code = 200

    body = {
        "messages": messages,
    }

    return make_response(body, status_code)


@app.route('/api/messages', methods=['POST'])
def add_message():
    try:
        creator_id = request.json['creatorId']
        content = request.json['text']
        status_code = 200
    except (TypeError, KeyError):
        creator_id = None
        content = None
        status_code = 400
    # @todo add validation that user needs to exist

    body = {
        "text": content,
        "creatorId": creator_id
    }

    return make_response(body, status_code)


if __name__ == '__main__':
    script_name = __file__
    print("run:\n"
          "FLASK_APP={} python -m flask run --port 8000 --host 0.0.0.0".format(script_name))
    exit(1)
