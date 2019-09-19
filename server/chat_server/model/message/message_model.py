from .message_model_factory import MessageModel
from server.chat_server.model.database import messagecollection

message_model = MessageModel(messagecollection)
