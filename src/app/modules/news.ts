export interface News {
  id?: string;
  date?: string;
  title?: string;
  linkstr?: string;
  textnews?: string;
  photo?: [
    {name: string; link: string}
    ];
}
