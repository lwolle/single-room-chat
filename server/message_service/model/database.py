from pymongo import MongoClient, TEXT

MONGO_URI = "mongodb://localhost:27018/admin"
client = MongoClient(MONGO_URI)
database = client.chatApp
messagecollection = client.chatApp.messages
messagecollection.create_index([('text', TEXT)], name='search_index', default_language='english')
