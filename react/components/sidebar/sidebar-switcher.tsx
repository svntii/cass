import { ContentType } from "@/types/content-types"
import {
  IconMessage,
  IconUserCircle
} from "@tabler/icons-react"
import { FC } from "react"
import { TabsList } from "../ui/tabs"
import { SidebarSwitchItem } from "@/components/sidebar/side-bar-switcher-item"

export const SIDEBAR_ICON_SIZE = 28

interface SidebarSwitcherProps {
  onContentTypeChange: (contentType: ContentType) => void
}

export const SidebarSwitcher: FC<SidebarSwitcherProps> = ({
  onContentTypeChange
}) => {
  return (
    <div className="flex flex-col justify-between border-r-2 pb-5">
      <TabsList className="bg-background grid h-[440px] grid-rows-7">
        <SidebarSwitchItem
          icon={<IconMessage size={SIDEBAR_ICON_SIZE} />}
          contentType="chats"
          onContentTypeChange={onContentTypeChange}
        />

        <SidebarSwitchItem
          icon={<IconUserCircle size={SIDEBAR_ICON_SIZE} />}
          contentType="profile"
          onContentTypeChange={onContentTypeChange}
        />
      </TabsList>
    </div>
  )
}
