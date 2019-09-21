# import pytest
# from message_service.app import app, messages
# from message_service.status_codes import status_codes
# from message_service.routes import setup_routes
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
# def test_get_messages_ok(client):
#     setup_routes(app, message_model)
#     response = client.get('/api/messages?numbers=50')
#     json_data = response.get_json()
#
#     assert response.status == status_codes['200']
#     assert json_data == {
#         "messages": messages,
#     }
