import { FeedbackRepository , FeedbackCreateData } from "../feedbacks-repository";
import { prisma } from '../../prisma'

export class PrismaFeedbackRepository implements FeedbackRepository {
      async create({ type , comment , screenshot}: FeedbackCreateData){
               await prisma.feedback.create({
                    data : {
                        type,
                        comment,
                        screenshot
                    }
                })
        };
}