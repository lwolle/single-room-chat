from user_service.model.user_model_factory import UserModel


def createMockDb(mocker):
    insert_stub = mocker.stub(name='insert_one')

    class InsertResult:
        @property
        def inserted_id(self):
            return 'stubbed-id'

    class MockDB:
        def insert_one(self, message):
            insert_stub(message)

            return InsertResult()

    mockdb = MockDB()

    return {
        "mock_db": mockdb,
        "insert_stub": insert_stub,
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
