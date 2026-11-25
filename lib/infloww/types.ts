export type Status =
  | "connected"
  | "disconnected"
  | "not connected"
  | "2FA required"
  | "deleted";

export interface Creator {
  id: string;
  name: string;
  nickName: string;
  userName: string;
  tagName: string;
  status: Status;
  platformPid: number;
  createdTime: string;
  deletedTime: string;
}

export interface ParamsType {
  limit: number;
  platformCode: string;
  cursor: string | null;
}

export interface InflowwResponse<T> {
  data: {
    list: T[];
    platformCode: string;
    cursor: string | null;
    hasMore: boolean;
  };
}
