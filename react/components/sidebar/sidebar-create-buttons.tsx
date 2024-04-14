import { ChatUIContext } from "@/context/context"

import { ContentType } from "@/types/content-types"
import { IconFolderPlus, IconPlus } from "@tabler/icons-react"
import { FC, useContext, useState } from "react"
import { Button } from "../ui/button"


interface SidebarCreateButtonsProps {
  contentType: ContentType
  hasData: boolean
}

export const SidebarCreateButtons: FC<SidebarCreateButtonsProps> = ({
  contentType,
  hasData
}) => {
  const { profile, selectedWorkspace, folders, setFolders } =
    useContext(ChatUIContext)

  const [isCreatingPrompt, setIsCreatingPrompt] = useState(false)
  const [isCreatingPreset, setIsCreatingPreset] = useState(false)
  const [isCreatingFile, setIsCreatingFile] = useState(false)
  const [isCreatingCollection, setIsCreatingCollection] = useState(false)
  const [isCreatingAssistant, setIsCreatingAssistant] = useState(false)
  const [isCreatingTool, setIsCreatingTool] = useState(false)
  const [isCreatingModel, setIsCreatingModel] = useState(false)

  const handleCreateFolder = async () => {
    if (!profile) return
    if (!selectedWorkspace) return


  }

  const getCreateFunction = () => {
    switch (contentType) {
      case "chats":
        return async () => {
          {}
        }

      case "settings":
        return async () => {
          setIsCreatingPreset(true)
        }

      default:
        break
    }
  }

  return (
    <div className="flex w-full space-x-2">
      <Button className="flex h-[36px] grow" onClick={getCreateFunction()}>
        <IconPlus className="mr-1" size={20} />
        New{" "}
        {contentType.charAt(0).toUpperCase() +
          contentType.slice(1, contentType.length - 1)}
      </Button>

      {hasData && (
        <Button className="size-[36px] p-1" onClick={handleCreateFolder}>
          <IconFolderPlus size={20} />
        </Button>
      )}
    </div>
  )
}
