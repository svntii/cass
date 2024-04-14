import { Profile } from "@/db/profile";
import { Workspace } from "@/db/workspace";
import {ChatMessage, ChatSettings, Chat, ChatFileItems} from "@/db/passive-chat";

import { Dispatch, SetStateAction, createContext } from "react"
import { ChatFile, MessageImage } from "@/db/chat-attachment";
import { Collection, Folder, Preset, Prompt, Tool } from "@/db/items";

interface ChatUIContext {
    profile: Profile | null;
    setProfile: Dispatch<SetStateAction<{} | null>>;

    selectedWorkspace: Workspace | null;
    setSelectedWorkspace: Dispatch<SetStateAction<Workspace | null>>;

    // ITEMS STORE
    collections: Collection[];
    setCollections: Dispatch<SetStateAction<Collection[]>>;
    chats: Chat[];
    setChats: Dispatch<SetStateAction<Chat[]>>;
    files: ChatFile[];
    setFiles: Dispatch<SetStateAction<ChatFile[]>>;
    folders: Folder[];
    setFolders: Dispatch<SetStateAction<Folder[]>>;
    presets: Preset[];
    setPresets: Dispatch<SetStateAction<Preset[]>>;
    prompts: Prompt[];
    setPrompts: Dispatch<SetStateAction<Prompt[]>>;
    tools: Tool[];
    setTools: Dispatch<SetStateAction<Tool[]>>;
    workspaces: Workspace[];
    setWorkspaces: Dispatch<SetStateAction<Workspace[]>>;
    
    

    // Passive Chat Store
    userInput: string;
    setUserInput: Dispatch<SetStateAction<string>>;
    chatMessages: ChatMessage[];
    setChatMessages: Dispatch<SetStateAction<ChatMessage[]>>;
    chatSettings: ChatSettings | null;
    setChatSettings: Dispatch<SetStateAction<ChatSettings | null>>;
    selectedChat: Chat | null;
    setSelectedChat: Dispatch<SetStateAction<Chat | null>>;
    chatFileItems: ChatFileItems[];
    setChatFileItems: Dispatch<SetStateAction<ChatFileItems[]>>;


    // Active Chat Store
    abortController: AbortController | null;
    setAbortController: Dispatch<SetStateAction<AbortController | null>>;
    firstTokenReceived: boolean;
    setFirstTokenReceived: Dispatch<SetStateAction<boolean>>;
    isGenerating: boolean;
    setIsGenerating: Dispatch<SetStateAction<boolean>>;

    // ATTACHMENTS STORE
    chatFiles: ChatFile[]
    setChatFiles: Dispatch<SetStateAction<ChatFile[]>>
    chatImages: MessageImage[]
    setChatImages: Dispatch<SetStateAction<MessageImage[]>>
    newMessageFiles: ChatFile[]
    setNewMessageFiles: Dispatch<SetStateAction<ChatFile[]>>
    newMessageImages: MessageImage[]
    setNewMessageImages: Dispatch<SetStateAction<MessageImage[]>>
    showFilesDisplay: boolean
    setShowFilesDisplay: Dispatch<SetStateAction<boolean>>


  }
  
  export const ChatUIContext = createContext<ChatUIContext>({
    profile: null,
    setProfile: () => {},

    selectedWorkspace: null,
    setSelectedWorkspace: () => {},

    // ITEMS STORE

    collections: [],
    setCollections: () => {},
    chats: [],
    setChats: () => {},
    files: [],
    setFiles: () => {},
    folders: [],
    setFolders: () => {},
    presets: [],
    setPresets: () => {},
    prompts: [],
    setPrompts: () => {},
    tools: [],
    setTools: () => {},
    workspaces: [],
    setWorkspaces: () => {},

    // Passive Chat Store
    userInput: "",
    setUserInput: () => {},
    chatMessages: [],
    setChatMessages: () => {},
    chatSettings: null,
    setChatSettings: () => {},
    selectedChat: null,
    setSelectedChat: () => {},
    chatFileItems: [],
    setChatFileItems: () => {},

    // Active Chat Store
    abortController: null,
    setAbortController: () => {},
    firstTokenReceived: false,
    setFirstTokenReceived: () => {},
    isGenerating: false,
    setIsGenerating: () => {},

    // ATTACHMENTS STORE
    chatFiles: [],
    setChatFiles: () => {},
    chatImages: [],
    setChatImages: () => {},
    newMessageFiles: [],
    setNewMessageFiles: () => {},
    newMessageImages: [],
    setNewMessageImages: () => {},
    showFilesDisplay: false,
    setShowFilesDisplay: () => {}
  

  });

//   interface ChatbotUIContext {


//   // CHAT INPUT COMMAND STORE
//   isPromptPickerOpen: boolean
//   setIsPromptPickerOpen: Dispatch<SetStateAction<boolean>>
//   slashCommand: string
//   setSlashCommand: Dispatch<SetStateAction<string>>
//   isFilePickerOpen: boolean
//   setIsFilePickerOpen: Dispatch<SetStateAction<boolean>>
//   hashtagCommand: string
//   setHashtagCommand: Dispatch<SetStateAction<string>>
//   isToolPickerOpen: boolean
//   setIsToolPickerOpen: Dispatch<SetStateAction<boolean>>
//   toolCommand: string
//   setToolCommand: Dispatch<SetStateAction<string>>
//   focusPrompt: boolean
//   setFocusPrompt: Dispatch<SetStateAction<boolean>>
//   focusFile: boolean
//   setFocusFile: Dispatch<SetStateAction<boolean>>
//   focusTool: boolean
//   setFocusTool: Dispatch<SetStateAction<boolean>>
//   focusAssistant: boolean
//   setFocusAssistant: Dispatch<SetStateAction<boolean>>
//   atCommand: string
//   setAtCommand: Dispatch<SetStateAction<string>>
//   isAssistantPickerOpen: boolean
//   setIsAssistantPickerOpen: Dispatch<SetStateAction<boolean>>

//   // RETRIEVAL STORE
//   useRetrieval: boolean
//   setUseRetrieval: Dispatch<SetStateAction<boolean>>
//   sourceCount: number
//   setSourceCount: Dispatch<SetStateAction<number>>

//   // TOOL STORE
//   selectedTools: Tables<"tools">[]
//   setSelectedTools: Dispatch<SetStateAction<Tables<"tools">[]>>
//   toolInUse: string
//   setToolInUse: Dispatch<SetStateAction<string>>
// }
