from flask import Flask, request, make_response
from flask_cors import CORS
from user_service.model.user_model import user_model


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


if __name__ == '__main__':
    script_name = __file__
    print("run:\n"
          "FLASK_APP={} python -m flask run --port 8001 --host 0.0.0.0".format(script_name))
    exit(1)
