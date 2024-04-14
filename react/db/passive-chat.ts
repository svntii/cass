export interface ChatMessage {
    id: string;
    chatId: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
    senderId: string;
    isAssistant: boolean;
    isRead: boolean;
}

export interface ChatSettings {
    id: string;
    chatId: string;
    isMuted: boolean;
    isPinned: boolean;
    isArchived: boolean;
    isStarred: boolean;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface Chat{
    id: string;
    workspaceId: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ChatFileItems {
    id: string;
    chatId: string;
    fileId: string;
    createdAt: Date;
    updatedAt: Date;
}