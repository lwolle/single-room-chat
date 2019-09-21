from flask import Flask, request, make_response
from flask_cors import CORS
from message_service.model.message_model import message_model


def create_app(config):
    appa = Flask(__name__)
    CORS(appa, support_credentials=True)
    return appa


app = create_app('')


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
        status_code = 200
        # @todo add validation
        message = message_model.add(request.json)
    except (TypeError, KeyError):
        status_code = 400
        message = None

    return make_response(message, status_code)


@app.route('/api/messages/search', methods=['POST'])
def search_message():
    try:
        query = request.json['query']
        body = {
            "messages": message_model.search(query),
        }
        status_code = 200
    except (TypeError, KeyError):
        body = None
        status_code = 400

    return make_response(body, status_code)


if __name__ == '__main__':
    script_name = __file__
    print("run:\n"
          "FLASK_APP={} python -m flask run --port 8000 --host 0.0.0.0".format(script_name))
    exit(1)
