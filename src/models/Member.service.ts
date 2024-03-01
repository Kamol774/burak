import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/errors";
import { MemberType } from "../libs/enum/member.enum";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();    // exist -> restoran accounti allaqachon bazada mavjud yoki yo'qligini tekshirish, bor bo'lsa boshqa ochishga ruxsat bermaydi
    console.log("exist", exist)
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
    }
  }
}

export default MemberService;