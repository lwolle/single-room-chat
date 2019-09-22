from flask import Flask, render_template
import socketio
import eventlet

# create a Socket.IO server
# sio = socketio.Server(cors_allowed_origins="http://localhost:3000")
sio = socketio.Server(cors_allowed_origins="http://localhost:3000", async_mode='threading')

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.wsgi_app = socketio.WSGIApp(sio, app.wsgi_app)

@sio.event
def connect(sid, environ):
    print('connect ', sid)


@sio.event
def chat_message(sid, data):
    print('message ', data)
    sio.emit('message', {
        "id": 'uuidv4',
        "text": 'from server',
        "creatorId": 'Hannes Wurst'
    })


@sio.event
def disconnect(sid):
    print('disconnect ', sid)


if __name__ == '__main__':
    app.run(threaded=True, host='localhost', port='8002')
    # eventlet.wsgi.server(eventlet.listen(('localhost', 8002)), app)
