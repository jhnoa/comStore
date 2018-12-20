declare type JSONData =
  | null
  | void
  | string
  | number
  | boolean
  | {[string]: JSONData}
  | Array<JSONData>;

declare type FeathersErrorType = {
  name: string,
  message: string,
  code: number,
  className: string,
  data?: Object,
  errors?: Object,
};

declare type FeathersAuthenticatedType = {
  accessToken: string,
};

declare type FeathersAuthenticationType =
  | FeathersAuthenticatedType
  | FeathersErrorType;

declare type DimensionsHandlerProps = {
  screen: {fontScale: number, scale: number, width: number, height: number},
  window: {fontScale: number, scale: number, width: number, height: number},
};
