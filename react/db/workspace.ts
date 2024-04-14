export interface Workspace {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  // Include other properties as needed
}

export interface WorkspaceImage {
  id: string;
  workspaceId: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}