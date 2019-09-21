from uuid import uuid4


class MessageModel:
    def __init__(self, messagedb):
        self.messagedb = messagedb

    def get_all(self):
        return [{"id": 1, "text": "the text"}, {"id": 2, "text": "the text"}]

    def add(self, message):
        result = {
            "id": uuid4(),
            "text": message['text'],
            "creator_id": message['creatorId'],
        }

        self.messagedb.insert_one(message)

        return result

    def search(self, query: str):

        result = self.messagedb.find_all(where={"text": query})
        # @todo jsonify result
        return result
