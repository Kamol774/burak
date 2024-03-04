import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enum/member.enum";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome")
    res.send("Home Page")
  }
  catch (err) {
    console.log("Error goHome", err)
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page")
  }
  catch (err) {
    console.log("Error getLogin", err)
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page")
  }
  // send | json | redirect | end | render
  catch (err) {
    console.log("Error getSignup", err)
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("DONE")

  } catch (err) {
    console.log("Error processLogin", err)
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);

    const newMember: MemberInput = req.body;  // kirib kelayotgan malumotni newMember variable ga tenglab olyabmiz
    newMember.memberType = MemberType.RESTAURANT

    const memberService = new MemberService();  // MemberService class dan instance olib memberService variable ga tenglashtirib olyapmiz
    const result = await memberService.processSignup(newMember);  // hosil qilingan memberService objectini result variable ga tenglashtirib olyabmiz va hosil bolgan object orqali processSignup methodini ishlatamiz.

    res.send(result)

  } catch (err) {
    console.log("Error processSignup", err)
    res.send(err)
  }
};

export default restaurantController