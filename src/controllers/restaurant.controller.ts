import { T } from "../libs/types/common";
import { NextFunction, Request, Response } from "express";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enum/member.enum";
import Errors, { HttpCode, Message } from "../libs/errors";

const memberService = new MemberService();  // MemberService classdan instance olib memberService variable ga tenglashtirib olyapmiz

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
    if (!file)  // signup jarayonida rasm yuklamasa error beramiz
      throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);
    const newMember: MemberInput = req.body;  // kirib kelayotgan malumotni newMember variable ga tenglab olyabmiz
    newMember.memberImage = file?.path.replace(/\\/g, "/"); // kiritilgan fayl manzilini DB ga yozamiz. (fayl o'zi server ga yoziladi)
    newMember.memberType = MemberType.RESTAURANT

    const result = await memberService.processSignup(newMember);  // hosil qilingan memberService objectini result variable ga tenglashtirib olyabmiz va hosil bolgan object orqali processSignup methodini ishlatamiz.

    req.session.member = result; // database ga requestdagi session ni yozyapmiz
    req.session.save(function () { // browser ga yozyapmiz
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

restaurantController.getUsers = async (req: Request, res: Response) => {
  try {
    console.log("getUsers")
    const result = await memberService.getUsers();
    console.log("result", result);

    res.render("users", { users: result }); // ejs ga datani paste qilyapmiz
  } catch (err) {
    console.log("Error getUsers", err)
    res.redirect("/admin/login")
  }
};

restaurantController.updateChosenUser = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenUser");
    const result = await memberService.updateChosenUser(req.body);
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error updateChosenUser:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
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

//////////////////////////////////////////////////////////////////
/* Authorization */

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