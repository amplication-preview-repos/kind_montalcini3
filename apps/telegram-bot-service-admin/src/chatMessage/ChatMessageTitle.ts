import { ChatMessage as TChatMessage } from "../api/chatMessage/ChatMessage";

export const CHATMESSAGE_TITLE_FIELD = "id";

export const ChatMessageTitle = (record: TChatMessage): string => {
  return record.id?.toString() || String(record.id);
};
