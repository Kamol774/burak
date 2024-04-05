import Errors, { HttpCode, Message } from "../libs/errors";
import { AUTH_TIMER } from "../libs/config";
import { Member } from "../libs/types/member";
import jwt from "jsonwebtoken";

class AuthService {
  constructor() { }

  public async createToken(payload: Member) {
    // payload bu biz tokenga almashtirmoqchi bo'lgan narsa (kirib kelgan malumot) 
    return new Promise((resolve, reject) => {
      const duration = `${AUTH_TIMER}h`;
      jwt.sign(
        payload,
        process.env.SECRET_TOKEN as string,
        {
          expiresIn: duration,
        },
        (err, token) => {
          if (err)
            reject(
              new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATED_FAILED)
            );
          else resolve(token as string);
        }
      );
    });
  }
}

export default AuthService;