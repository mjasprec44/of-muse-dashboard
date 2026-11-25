export type Status =
  | "connected"
  | "disconnected"
  | "not connected"
  | "2FA required"
  | "deleted";

export interface Creator {
  createdTime?: Date;
  deletedTime?: Date;
  id?: string;
  name: string;
  nickName: string;
  platformPid: string;
  status: string;
  tagName: string;
  userName?: string;
}
