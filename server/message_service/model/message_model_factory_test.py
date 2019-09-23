from message_service.model.message_model_factory import MessageModel


def createMockDb(mocker):
    insert_stub = mocker.stub(name='insert_one')
    find_stub = mocker.stub(name='find_all')

    class InsertResult:
        @property
        def inserted_id(self):
            return 'stubbed-id'

    class MockDB:
        def insert_one(self, message):
            insert_stub(message)

            return InsertResult()

        def find(self, query, fields):
            find_stub(query, fields)
            return []

    mockdb = MockDB()

    return {
        "mock_db": mockdb,
        "insert_stub": insert_stub,
        "find_stub": find_stub,
    }


def test_add(mocker):
    """Should call messages.insert_one()"""
    mock = createMockDb(mocker)
    message_model = MessageModel(mock['mock_db'])
    message = {
        "text": 'the-text',
        "creatorId": 'the-creator-id',
        "creatorName": 'the-creator-name',
    }

    result = message_model.add(message)
    mock['insert_stub'].assert_called_once_with({
        "text": 'the-text',
        "creator_id": 'the-creator-id',
        "creator_name": 'the-creator-name',
    })

    assert result == {
        "id": "stubbed-id",
        "text": 'the-text',
        "creatorId": 'the-creator-id',
        "creatorName": 'the-creator-name',
    }


def test_get_all(mocker):
    """Should call messages.find()"""
    mock = createMockDb(mocker)
    message_model = MessageModel(mock['mock_db'])

    message_model.get_all()
    mock['find_stub'].assert_called_once_with({}, {'id': 1, "text": 1, "creator_id": 1, "creator_name": 1})


def test_search(mocker):
    """Should call messages.find() with search query and return results"""
    mock = createMockDb(mocker)
    message_model = MessageModel(mock['mock_db'])
    search_term = 'search-term'
    query = {"$text": {"$search": search_term}}
    message_model.search(search_term)
    mock['find_stub'].assert_called_once_with(query, {'id': 1, "text": 1, "creator_id": 1, "creator_name": 1})
