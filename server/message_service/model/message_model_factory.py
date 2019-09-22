def convert_results(results):
    return [{
        "text": i['text'],
        "id": str(i['_id']),
        "creatorId": i['creator_id'],
        "creatorName": i['creator_name']
    } for i in results]


class MessageModel:
    def __init__(self, messages):
        self.messages = messages

    def get_all(self):
        results = self.messages.find({}, {'id': 1, "text": 1, "creator_id": 1, "creator_name": 1})

        return convert_results(results)

    def add(self, message):
        insert_result = self.messages.insert_one({
            "text": message['text'],
            "creator_id": message['creatorId'],
            "creator_name": message['creatorName'],
        })

        return {
            "id": str(insert_result.inserted_id),
            "text": message['text'],
            "creatorId": message['creatorId'],
            "creatorName": message['creatorName'],
        }

    def search(self, search_term):
        query = {"$text": {"$search": search_term}}
        results = self.messages.find(query, {'id': 1, "text": 1, "creator_id": 1, "creator_name": 1})

        return convert_results(results)
