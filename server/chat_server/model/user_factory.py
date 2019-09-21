from uuid import uuid4


class UserModel:
    def __init__(self, userdb):
        self.userdb = userdb

    def add(self, user_name):
        user_id = uuid4()

        result = self.userdb.insert_one({
            "user_id": user_id,
            "user_name": user_name
        })

        return {
            "userId": user_id,
            "userName": user_name
        }
