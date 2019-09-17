import datetime

# from chat_server.database import DB


class Job(object):

    def __init__(self, name):
        self.name = name
        self.created_at = datetime.datetime.utcnow()

    # def insert(self):
    #     if not DB.find_one("jobs", {"name": self.name}):
    #         DB.insert(collection='jobs', data=self.json())

    def json(self):
        return {
            'name': self.name,
            'created_at': self.created_at
        }
