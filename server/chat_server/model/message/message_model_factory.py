class MessageModel:
    def __init__(self, messagedb):
        self.messagedb = messagedb

    def get_all(self):
        return [{"id": 1, "text": "the text"}, {"id": 2, "text": "the text"}]
