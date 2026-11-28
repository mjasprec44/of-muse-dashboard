// --- Enums & Literal Unions (Singular Nouns) ---

export type CreatorStatus =
  | "connected"
  | "disconnected"
  | "not connected"
  | "2FA required"
  | "deleted";

export type TransactionType =
  | "Unknown"
  | "Subscription"
  | "RecurringSubscription"
  | "Tips"
  | "Messages"
  | "Referrals"
  | "Streams"
  | "Posts";

export type TransactionTipSource =
  | "Unknown"
  | "Profile"
  | "Post"
  | "Chat"
  | "Stream"
  | "Story";

export type TransactionStatus = "loading" | "done" | "undo" | "pending_return";

export type TransactionSalesRule =
  | "Unassigned"
  | "Message sender"
  | "Employee on shift"
  | "Manually reassigned";

export type LinkStatus = "ACTIVE" | "DEACTIVATED";
export type LinkType = "CAMPAIGN" | "TRIAL" | "TRACKING";

// --- Base API Types ---

export interface BaseParams {
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

// --- Domain DTOs (Data Transfer Objects) ---

export interface CreatorDTO {
  id: string;
  name: string;
  nickName: string;
  userName: string;
  tagName: string;
  status: CreatorStatus;
  platformPid: string; // 👈 Switched to string to avoid JS large integer precision loss
  createdTime: string;
  deletedTime: string | null;
}

export interface TransactionDTO {
  id: number;
  transactionId: string;
  platformPid: string; // 👈 Switched to string
  fanId: string;
  fanName: string;
  createdTime: string;
  type: TransactionType;
  tipSource: TransactionTipSource;
  status: TransactionStatus;
  amount: number;
  fee: number;
  net: number;
  salesRule: TransactionSalesRule;
  attributeEmployeeId: number;
  salesAmount: number;
  currency: string;
}

export interface LinkDTO {
  id: number;
  message: string;
  type: LinkType; // 👈 Strictly typed this instead of 'string'
  subCount: number;
  subLimit: number;
  subDuration: number;
  discount: number;
  finishedFlag: boolean;
  earningsGross: number;
  earningsNet: number;
  payingFansCount: number;
  currency: string;
  createdTime: string;
  expiredTime: string;
  updatedTime: string;
}

// --- Endpoint-Specific Query Parameters ---

export interface TransactionQueryParams extends BaseParams {
  creatorId: string;
  startTime: string;
  endTime: string;
}

export interface LinkQueryParams extends BaseParams {
  creatorId: string;
  endTime: string;
  startTime: string;
  linkType: LinkType; // 👈 Strictly typed
  status?: LinkStatus; // 👈 Strictly typed
}
