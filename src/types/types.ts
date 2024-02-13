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

export type TFeeCollections = {
  id: number;
  classes: string;
  amount: number;
  feesType: string;
};
