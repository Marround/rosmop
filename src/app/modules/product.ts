export interface Goods {
  id?: string;
  g_id?: string;
  routerlink?: string;
  title?: string;
  description?: string;
  video?: string;
  photo?: string;
  byappointment?: string;
  material?: string;
}

export interface Group {
  id?: string;
  groupname?: string;
  routerlink?: string;
  order?: number;
}

export interface Material {
  id?: string;
  filterstr?: string;
  display?: string;
}

export interface Byappointment {
  id?: string;
  filterstr?: string;
  display?: string;
}
