import { ChatUIContext } from "@/context/context";

import { ContentType } from "@/types/content-types";
import { IconPlus } from "@tabler/icons-react";
import { FC, useContext, useState } from "react";
import { Button } from "../ui/button";

interface SidebarCreateButtonsProps {
  contentType: ContentType;
  hasData: boolean;
}

export const SidebarCreateButtons: FC<SidebarCreateButtonsProps> = ({
  contentType,
  hasData,
}) => {
  const { profile, selectedWorkspace, folders, setFolders } =
    useContext(ChatUIContext);

  const [isCreatingPreset, setIsCreatingPreset] = useState(false);

  const getCreateFunction = () => {
    switch (contentType) {
      case "chats":
        return async () => {
          {
          }
        };
      default:
        break;
    }
  };

  return (
    <div className="flex w-full space-x-2">
      <Button className="flex h-[36px] grow" onClick={getCreateFunction()}>
        <IconPlus className="mr-1" size={20} />
        New{" "}
        {contentType.charAt(0).toUpperCase() +
          contentType.slice(1, contentType.length - 1)}
      </Button>
    </div>
  );
};
