// types.ts

export interface FormValues {
  username: string;
  password: string;
  remember: boolean;
}

export interface FormErrorInfo {
  errorFields: {
    name: (string | number)[];
    errors: string[];
  }[];
  outOfDate: boolean;
  values: FormValues;
}
