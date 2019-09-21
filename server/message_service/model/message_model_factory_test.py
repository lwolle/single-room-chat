from message_service.model.message_model_factory import MessageModel


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
    """Should call messages.insert_one()"""
    mock = createMockDb(mocker)
    message_model = MessageModel(mock['mock_db'])
    message = {
        "text": 'the-text',
        "creatorId": 'the-creator-id',
    }

    result = message_model.add(message)
    mock['insert_stub'].assert_called_once_with({
        "text": 'the-text',
        "creator_id": 'the-creator-id',
    })

    assert result == {
        "id": "stubbed-id",
        "text": 'the-text',
        "creatorId": 'the-creator-id',
    }


def test_get_all(mocker):
    """Should call messages.find()"""
    mock = createMockDb(mocker)
    message_model = MessageModel(mock['mock_db'])

    message_model.get_all()
    mock['find_stub'].assert_called_once_with({}, {'id': 1, "text": 1, "creator_id": 1})


def test_search(mocker):
    """Should call messages.find() with search query and return results"""
    mock = createMockDb(mocker)
    message_model = MessageModel(mock['mock_db'])
    search_term = 'search-term'
    query = {"$text": {"$search": search_term}}
    message_model.search(search_term)
    mock['find_stub'].assert_called_once_with(query, {'id': 1, "text": 1, "creator_id": 1})
