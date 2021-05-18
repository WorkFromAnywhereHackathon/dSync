interface ApiMapItem {
  url: string;
  method: 'post' | 'get' | 'put' | 'delete';
  noAuthHeader?: boolean;
  headers?: any;
  mock?: any;
  hasPermission?: { key: string; type: 'NONE' | 'VIEW' | 'EDIT' };
}

export interface ApiMap {
  [type: string]: ApiMapItem;
}

export interface Params {
  [type: string]: number | boolean | undefined;
}
