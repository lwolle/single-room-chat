from .user_model_factory import UserModel
from server.chat_server.model.database import usercollection

user_model = UserModel(usercollection)
