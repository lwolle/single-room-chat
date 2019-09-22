class UserModel:
    def __init__(self, users):
        self.users = users

    def add(self, user_name):
        insert = self.users.insert_one({
            "name": user_name
        })

        print("userId", str(insert.inserted_id))

        return {
            "userName": user_name,
            "userId": str(insert.inserted_id)
        }
