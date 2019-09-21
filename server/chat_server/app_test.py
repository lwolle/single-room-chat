# import os
# from chat_server.app import app, messages
# import tempfile
# from chat_server.status_codes import status_codes
# import pytest
#
#
# @pytest.fixture
# def client():
#     app.config['TESTING'] = True
#     client = app.test_client()
#
#     yield client
#
#
#
# def test_login_ok(client):
#     response = client.post('/api/users', json={
#         "userName": "user-name"
#     })
#     json_data = response.get_json()
#
#     assert json_data["userName"] == "user-name"
#     assert isinstance(json_data["userId"], str)
#     assert response.status == status_codes['200']
#
#
# def test_login_not_found_no_data(client):
#     response = client.post('/api/users')
#     json_data = response.get_json()
#
#     assert json_data["userName"] is None
#     assert json_data["userId"] is None
#     assert response.status == status_codes['400']
#
#
# def test_login_not_found_empty_data(client):
#     response = client.post('/api/users', json={})
#     json_data = response.get_json()
#
#     assert json_data["userName"] is None
#     assert json_data["userId"] is None
#     assert response.status == status_codes['400']
#
#
# def test_get_messages_ok(client):
#     response = client.get('/api/messages?numbers=50')
#     json_data = response.get_json()
#
#     assert response.status == status_codes['200']
#     assert json_data == {
#         "messages": messages,
#     }
#
#
# def test_add_message_not_found_missing_creator_id(client):
#     response = client.post('/api/messages?numbers=50', json={
#         'text': 'secret'
#     })
#     json_data = response.get_json()
#
#     assert response.status == status_codes['400']
#     assert json_data['creatorId'] is None
#     assert json_data['text'] is None
#
#
# def test_add_message_not_found_no_data(client):
#     response = client.post('/api/messages?numbers=50')
#     json_data = response.get_json()
#
#     assert response.status == status_codes['400']
#     assert json_data['creatorId'] is None;
#     assert json_data['text'] is None;
#
#
# def test_add_message_ok(client):
#     response = client.post('/api/messages', json={
#         'creatorId': 'flask', 'text': 'secret'
#     }, )
#     json_data = response.get_json()
#
#     assert json_data == {
#         "text": 'secret',
#         "creatorId": 'flask'
#     }
#
#     assert response.status == status_codes['200']
