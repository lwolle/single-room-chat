# from message_service.main import app
# from message_service.status_codes import status_codes
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
# messages = [{"id": 1, "text": "the text"}, {"id": 2, "text": "the text"}]
#
# class MockDatabase:
#     # mock json() method always returns a specific testing dictionary
#     @staticmethod
#     def insert_one():
#         return {"mock_key": "mock_response"}
#
#
# @pytest.fixture(autouse=True)
# def mock_database(monkeypatch):
#     database = dict()
#     monkeypatch.delattr("message_service.model", "message_model", MockDatabase)
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
# #
# # def test_add_message_not_found_missing_creator_id(client):
# #     response = client.post('/api/messages?numbers=50', json={
# #         'text': 'secret'
# #     })
# #     json_data = response.get_json()
# #
# #     assert response.status == status_codes['400']
# #     assert json_data['creatorId'] is None
# #     assert json_data['text'] is None
# #
# #
# # def test_add_message_not_found_no_data(client):
# #     response = client.post('/api/messages?numbers=50')
# #     json_data = response.get_json()
# #
# #     assert response.status == status_codes['400']
# #     assert json_data['creatorId'] is None;
# #     assert json_data['text'] is None;
# #
# #
# # def test_add_message_ok(client):
# #     response = client.post('/api/messages', json={
# #         'creatorId': 'flask', 'text': 'secret'
# #     }, )
# #     json_data = response.get_json()
# #
# #     assert json_data == {
# #         "text": 'secret',
# #         "creatorId": 'flask'
# #     }
# #
# #     assert response.status == status_codes['200']
