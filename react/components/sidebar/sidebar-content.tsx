import { ContentType } from "@/types/content-types"
import { FC, useState } from "react"
import { SidebarCreateButtons } from "./sidebar-create-buttons"
import { SidebarDataList } from "./sidebar-data-list"
import { SidebarSearch } from "./sidebar-search"
import { Folder } from "@/db/items"

interface SidebarContentProps {
  contentType: ContentType
  folders: Folder[]
}

export const SidebarContent: FC<SidebarContentProps> = ({
  contentType,
  folders
}) => {
  const [searchTerm, setSearchTerm] = useState("")


  return (
    // Subtract 50px for the height of the workspace settings
    <div className="flex max-h-[calc(100%-50px)] grow flex-col">
      <div className="mt-2 flex items-center">
        <SidebarCreateButtons
          contentType={contentType}
          hasData={1 > 0}
        />
      </div>

      <div className="mt-2">
        <SidebarSearch
          contentType={contentType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      <SidebarDataList
        contentType={contentType}
        folders={folders}
      />
    </div>
  )
}
