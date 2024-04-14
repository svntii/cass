import { ChatUIContext } from "@/context/context"
import { ContentType } from "@/types/content-types"
import { FC, useContext } from "react"
import { SIDEBAR_WIDTH } from "../ui/dashboard"
import { TabsContent } from "../ui/tabs"

import { SidebarContent } from "./sidebar-content"
import { Folder } from "@/db/items"
import { ProfileSidebarContent } from "./profile/sidebar-profile-content"
import { Profile } from "@/db/profile"
import dummyProfile from "@/dummy/dummy"

interface SidebarProps {
  contentType: ContentType
  showSidebar: boolean
}

export const Sidebar: FC<SidebarProps> = ({ contentType, showSidebar }) => {
  const {
    folders,
    chats,
    presets,
    prompts,
    files,
    collections,
    tools,
  } = useContext(ChatUIContext)

  let profile = dummyProfile

  const chatFolders = folders.filter(folder => folder.type === "chats")
  const presetFolders = folders.filter(folder => folder.type === "settings")

  const renderSidebarContent = (
    contentType: ContentType,
    folders: Folder[]
  ) => {
    
    switch (contentType) {
      case "chats":
        return <SidebarContent contentType={contentType} folders={folders} />

      case "profile":
        return <ProfileSidebarContent profile={dummyProfile} /> 

      default:
        return null
    }
  }

  return (
    <TabsContent
      className="m-0 w-full space-y-2"
      style={{
        // Sidebar - SidebarSwitcher
        minWidth: showSidebar ? `calc(${SIDEBAR_WIDTH}px - 60px)` : "0px",
        maxWidth: showSidebar ? `calc(${SIDEBAR_WIDTH}px - 60px)` : "0px",
        width: showSidebar ? `calc(${SIDEBAR_WIDTH}px - 60px)` : "0px"
      }}
      value={contentType}
    >
      <div className="flex h-full flex-col p-3">
        <div className="flex items-center border-b-2 pb-2">
        </div>

        {(() => {
          switch (contentType) {
            case "chats":
              return renderSidebarContent("chats", chatFolders)

            case "profile":
              return renderSidebarContent("profile", presetFolders)

            default:
              return null
          }
        })()}
      </div>
    </TabsContent>
  )
}
