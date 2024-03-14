import { T } from "../libs/types/common";
import { NextFunction, Request, Response } from "express";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enum/member.enum";
import Errors, { HttpCode, Message } from "../libs/errors";

const memberService = new MemberService();  // MemberService modeli(class)dan instance olib memberService variable ga tenglashtirib olyapmiz

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome")
    res.render("home")
  }
  catch (err) {
    console.log("Error goHome", err)
    res.redirect("/admin")
  }
};


restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.render("signup")
  }
  // send | json | redirect | end | render
  catch (err) {
    console.log("Error getSignup", err)
    res.redirect("/admin")
  }
};


restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.render("login")
  }
  catch (err) {
    console.log("Error getLogin", err)
    res.redirect("/admin")
  }
};


restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processSignup");
    const file = req.file;
    if (!file)
      throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);
    const newMember: MemberInput = req.body;  // kirib kelayotgan malumotni newMember variable ga tenglab olyabmiz
    newMember.memberImage = file?.path;
    newMember.memberType = MemberType.RESTAURANT

    const result = await memberService.processSignup(newMember);  // hosil qilingan memberService objectini result variable ga tenglashtirib olyabmiz va hosil bolgan object orqali processSignup methodini ishlatamiz.

    req.session.member = result;
    req.session.save(function () {
      res.redirect("/admin/product/all") // signup bo'lgan user ni product page ga qaytaramiz 
    })
  } catch (err) {
    console.log("Error processLogin", err);
    const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(`<script> alert("${message}"); window.location.replace('admin/signup') </script>`);
  }
};


restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
  try {
    console.log("processLogin");
    const input: LoginInput = req.body,  // kirib kelayotgan malumotni input variable ga tenglab olyabmiz
      result = await memberService.processLogin(input); // hosil qilingan memberService objectini result variable ga tenglashtirib olyabmiz va hosil bolgan object orqali processLogin methodini ishlatamiz.

    req.session.member = result; // database ga requestdagi session ni yozyapmiz
    req.session.save(function () { // browser ga yozyapmiz
      res.redirect("/admin/product/all") // login bo'lgan user ni product page ga qaytaramiz 
    })

  } catch (err) {
    console.log("Error processLogin", err);
    const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(`<script> alert("${message}"); window.location.replace('admin/login') </script>`);
  }
};

restaurantController.logout = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("logout");
    req.session.destroy(function () {
      res.redirect("/admin")
    })
  } catch (err) {
    console.log("Error logout", err);
    res.redirect("/admin")
  }
};

restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession");
    if (req.session.member)
      res.send(`<script> alert("${req.session.member.memberNick}") </script>`);
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`)
  } catch (err) {
    console.log("Error checkAuthSession", err);
    res.send(err);
  }
};

restaurantController.verifyRestaurant = (  // middleware mantig'i
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.session?.member?.memberType === MemberType.RESTAURANT) {
    req.member = req.session.member;
    next();  // bu narsa qo'yilmasa process keyingi qadamga o'tmay qotib qoladi
  } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(`<script> alert("${message}"); window.location.replace('/admin/login'); </script>`)

  }
};

export default restaurantController;