export interface News {
  id?: string;
  date?: string;
  title?: string;
  textnews?: string;
  photo?: [
    {name: string; link: string}
    ];
}
