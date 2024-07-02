export interface NoteData {
  title: string;
  markdown: string;
  tags: Tag[];
}

export interface Note extends NoteData {
  id: string;
}
export interface NoteDataRaw {
  title: string;
  markdown: string;
  tagIds: string[];
}

export interface NoteRaw extends NoteDataRaw {
  id: string;
}

export interface Tag {
  id: string;
  label: string;
}
