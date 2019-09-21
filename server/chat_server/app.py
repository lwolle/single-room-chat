from flask import Flask, request, make_response
from flask_cors import CORS
from server.chat_server.model.user.user_model import user_model
from server.chat_server.model.message.message_model import message_model


def create_app(config):
    appa = Flask(__name__)
    CORS(appa, support_credentials=True)
    return appa


app = create_app('')

@app.route('/api/users', methods=['POST'])
def login():
    try:
        user_name = request.json['userName']
        user = user_model.add(user_name)
        print('aasdasd', user)
        status_code = 200
    except (TypeError, KeyError):
        user = None
        status_code = 400

    return make_response(user, status_code)


@app.route('/api/messages', methods=['GET'])
def get_messages():
    try:
        body = {
            "messages": message_model.get_all(),
        }
        status_code = 200
    except:
        status_code = 400
        body = None

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
