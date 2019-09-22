from user_service.model.user_model_factory import UserModel


def createMockDb(mocker):
    insert_stub = mocker.stub(name='insert_one')
    find_stub = mocker.stub(name='find_all')

    class MockDB:
        @staticmethod
        def insert_one(message):
            insert_stub(message)

            return {
                "inserted_id": "stubbed-id"
            }

        @staticmethod
        def find(query, fields):
            find_stub(query, fields)
            return []

    return {
        "mock_db": MockDB,
        "insert_stub": insert_stub,
        "find_stub": find_stub
    }


def test_add(mocker):
    """Should call users.insert_one()"""
    name = "Hannes"
    mock = createMockDb(mocker)
    user_model = UserModel(mock['mock_db'])

    result = user_model.add(name)
    mock['insert_stub'].assert_called_once_with({
        "name": name,
    })

    assert result == {
        "userName": name,
        "userId": "stubbed-id",
    }
