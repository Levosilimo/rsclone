export type SortingOrder = 'asc' | 'ascending' | 'desc' | 'descending';

export interface UserRecordsReq {
  page?: number;
  limit?: number;
  sorting?: string;
  order?: SortingOrder;
  fullInfo?: boolean;
};

interface UserRecordsAuthData {
  email: string;
  isAdmin: boolean;
}

export interface UserRecordsItem {
  username: string;
  records: Record<string, Array<number>>;
  language?: string;
  authData?: UserRecordsAuthData;
  length?: number
}

export interface UserRecordRes {
  items: Array<UserRecordsItem>;
  totalCount: number;
}

export interface UserData {
  language: language;
  records: Record<string, Array<number>>
  username?: string;
}

export type theme = 'green' |'red' | 'yellow';
export type language = 'en_us' | 'ru' | 'uk' | 'es_es';

export interface IAvatar {
  username?: string,
  imageRef: HTMLImageElement | null | undefined,
  onClose: () => void,
  show: boolean,
}

export interface UpdateUsernameProps {
  onClose: () => void,
  show: boolean,
}
