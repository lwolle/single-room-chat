from pymongo import MongoClient

MONGO_URI = "mongodb://localhost:27017/admin"
client = MongoClient(MONGO_URI)
database = client.chatApp
usercollection = client.chatApp.users
messagecollection = client.chatApp.messages
