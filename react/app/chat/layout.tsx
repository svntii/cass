"use client"

import { Dashboard } from "@/components/ui/dashboard"
import { ChatUIContext } from "@/context/context"
import { useParams, useRouter } from "next/navigation"
import { ReactNode, useContext, useEffect, useState } from "react"
import Loading from "@/app/loading"
import { Workspace } from "@/db/workspace"
import { Chat } from "@/db/passive-chat"
import { FileData, Folder, File, Prompt } from "@/db/items"

interface WorkspaceLayoutProps {
  children: ReactNode
}

export default function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
  const router = useRouter()

  const params = useParams()
  const workspaceId = params.workspaceid as string

  const {
    setChatSettings,
    setChats,
    selectedWorkspace,
    setSelectedWorkspace,
    setSelectedChat,
    setChatMessages,
    setUserInput,
    setIsGenerating,
    setFirstTokenReceived,
    setChatFiles,
    setChatImages,
    setNewMessageFiles,
    setNewMessageImages,
    setShowFilesDisplay,
    setFolders,
    setFiles,
    setPresets,
    setPrompts,
    setTools,
  } = useContext(ChatUIContext)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const session = true

      if (!session) {
        return router.push("/login")
      } else {
        await fetchWorkspaceData(workspaceId)
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => await fetchWorkspaceData(workspaceId))()

    setUserInput("")
    setChatMessages([])
    setSelectedChat(null)

    setIsGenerating(false)
    setFirstTokenReceived(false)

    setChatFiles([])
    setChatImages([])
    setNewMessageFiles([])
    setNewMessageImages([])
    setShowFilesDisplay(false)
  }, [workspaceId])

  const fetchWorkspaceData = async (workspaceId: string) => {
    setLoading(true)

    const workspace: Workspace = {
      id: "1",
      name: "Test Workspace",
      description: "A test workspace",
      createdAt: new Date(),
      updatedAt: new Date()

    }
    setSelectedWorkspace(workspace)


    const chats : Chat[] = []
    setChats(chats)



    const folders: Folder[] = []
    setFolders(folders)

    const fileData : FileData = {
      files: []
    }
    setFiles(fileData.files)




    setLoading(false)
  }

  if (loading) {
    return <Loading />
  }

  return <Dashboard>{children}</Dashboard>
}
