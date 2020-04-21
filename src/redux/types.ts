export type Action<T> = {
  type: string;
  payload?: T;
};

export type ActionCreator<T> = (payload?: T) => Action<T>;
