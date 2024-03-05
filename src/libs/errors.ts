export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
  SOMETHING_WENT_WRONG = "Something went wrong",
  NO_DATA_FOUND = "No data is found!",
  CREATE_FAILED = "Creating is failed!",
  UPDATE_FAILED = "Updating is failed!",

  USED_NICK_PHONE = "You are inserting already used nick or phone!",
  NO_MEMBER_NICK = "No member with that member nick!",
  WRONG_PASSWORD = "Wrong password, please try again!"
}


// Java Scriptni ichidagi error larga extend bolsin
class Errors extends Error {
  public code: HttpCode; // => PROPERTY
  public message: Message;  // => PROPERTY

  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage
  }
}

export default Errors;