import { T } from "../libs/types/common";
import { Request, Response } from "express";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enum/member.enum";

const memberService = new MemberService();  // MemberService modeli(class)dan instance olib memberService variable ga tenglashtirib olyapmiz

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome")
    res.render("home")
  }
  catch (err) {
    console.log("Error goHome", err)
  }
};


restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.render("signup")
  }
  // send | json | redirect | end | render
  catch (err) {
    console.log("Error getSignup", err)
  }
};


restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.render("login")
  }
  catch (err) {
    console.log("Error getLogin", err)
  }
};


restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");

    const newMember: MemberInput = req.body;  // kirib kelayotgan malumotni newMember variable ga tenglab olyabmiz
    newMember.memberType = MemberType.RESTAURANT

    const result = await memberService.processSignup(newMember);  // hosil qilingan memberService objectini result variable ga tenglashtirib olyabmiz va hosil bolgan object orqali processSignup methodini ishlatamiz.

    // TODO SESSIONS AUTHENTICATION

    res.send(result)
  } catch (err) {
    console.log("Error processSignup", err)
    res.send(err)
  }
};


restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");

    const input: LoginInput = req.body,  // kirib kelayotgan malumotni input variable ga tenglab olyabmiz
      result = await memberService.processLogin(input); // hosil qilingan memberService objectini result variable ga tenglashtirib olyabmiz va hosil bolgan object orqali processLogin methodini ishlatamiz.

    // TODO SESSIONS AUTHENTICATION

    res.send(result) // login bo'lgan user ma'lumotini response browser ga qaytaramiz 
  } catch (err) {
    console.log("Error processLogin", err);
    res.send(err);
  }
};

export default restaurantController