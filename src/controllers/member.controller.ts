import MemberService from "../models/Member.service";
import { T } from "../libs/types/common";
import { Request, Response } from "express";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/errors";
import AuthService from "../models/Auth.service";


const memberService = new MemberService();  // MemberService modeli(class)dan instance olib memberService variable ga tenglashtirib olyapmiz
const authService = new AuthService();

const memberController: T = {};

// REACT loyihamiz uchun ishlatamiz

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    const input: MemberInput = req.body,  // kirib kelayotgan malumotni input variable ga tenglab olyabmiz 
      result: Member = await memberService.signup(input),  // hosil qilingan memberService objectini result variable(uning typei Member) ga tenglashtirib olyabmiz va hosil bolgan object orqali signup methodini ishlatamiz.
      // TODO: TOKENS AUTHENTICATION
      token = await authService.createToken(result);
    console.log("Auth token ====> ", token)

    res.json({ member: result })
  } catch (err) {
    console.log("Error signup", err)
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,  // kirib kelayotgan malumotni input variable ga tenglab olyabmiz
      result = await memberService.login(input), // hosil qilingan memberService objectini result variable ga tenglashtirib olyabmiz va hosil bolgan object orqali login methodini ishlatamiz.
      // TODO: TOKENS AUTHENTICATION
      token = await authService.createToken(result)
    console.log("signup token ====> ", token)

    res.json({ member: result }) // login bo'lgan user ma'lumotini response browser ga qaytaramiz
  } catch (err) {
    console.log("Error login", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController