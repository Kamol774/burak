// togridan togri controller bn ishlaydigan model
import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/errors";
import { MemberType } from "../libs/enum/member.enum";

class MemberService {
  // property
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;   // memberModel ni schema dagi MemberModel iga tenglab olamz 
  }
  // promise(void) : typescript bolganligi uchun bu method hech nmaani qaytarmaslik uchun yozilgan shart
  // agar async function bolmasa demak promise ishlatmimiz
  // processSignup functionini parameteriga input ni pass qilamiz va uning type MemberInput
  public async processSignup(input: MemberInput): Promise<Member> {
    // databasega bogliq mantiq:
    // exist variable hosil qilib oldik
    // exist -> restoran accounti allaqachon bazada mavjud yoki yo'qligini tekshirish, bor bo'lsa boshqa ochishga ruxsat bermaydi
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })  //  .findOne()memberModelni ni static methodi
      .exec();   // davomiy query larni (to'xtatish) tamomlash uchun ya'ni shu oxirgisi degan ma'noda ishlatamiz
    console.log("exist", exist)
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)  //1 ta dan ortiq restaurant ochilishiga qarshi mantiq
    try {
      // Yangi Burak restaurant ni hosil qilamz static method orqali.
      // memberSchema modelmni .create methodini ishlatdik.
      // natijani result variable ga tenglab oldik
      const result = await this.memberModel.create(input);

      result.memberPassword = "";         // passwordni hide qildik "" bo'sh stringga tenglab
      return result;         // va result ga biriktirilgan natijani return qildik
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
    }
  }

  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 }
      )
      .exec()
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
    const isMatch = input.memberPassword === member.memberPassword;

    if (!isMatch) throw new Errors(HttpCode.NOT_FOUND, Message.WRONG_PASSWORD);
    return = await this.memberModel.findById(member._id).exec();
  }
}

export default MemberService;