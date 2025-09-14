type Success<T> = {
  status: "success";
  data: T;
};

type Failure<E> = {
  status: "failure";
  error: E;
};

export type Result<T, E = Error> = Success<T> | Failure<E>;

export const success = <T>(value: T): Success<T> => ({
  status: "success",
  data: value,
});

export const failure = <E = Error>(error: E): Failure<E> => ({
  status: "failure",
  error,
});
