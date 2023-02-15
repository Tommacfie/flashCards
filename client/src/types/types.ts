export type FlashCardType = {
  _id?: string;
  title: string;
  question: string;
  answer: string;
};

export enum EnumTab {
  LIST = 'LIST',
  CREATE = 'CREATE',
}
