import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


const submitFeedback = new SubmitFeedbackUseCase(
    { create : createFeedbackSpy },
    { sendMail : sendMailSpy  }
)

describe('Submit feedback', () => {
    it('should be able to submit a feeback' ,async () => {

       await expect(submitFeedback.execute({
            type : 'BUG',
            comment : 'exemple comment',
            screenshot : 'data:image/png;base64,dwqdwq'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })
    it('should be able to submit feedback without type' ,async () => {
       await expect(submitFeedback.execute({
            type : '',
            comment : 'exemple comment',
            screenshot : 'data:image/png;base64,dwqdwq'
        })).rejects.toThrow();
    })
    it('should be able to submit feedback without commnet' ,async () => {
       await expect(submitFeedback.execute({
            type : 'BUG',
            comment : '',
            screenshot : 'data:image/png;base64,dwqdwq'
        })).rejects.toThrow();
    })
    it('should be able to submit feedback with an invalid screenshot' ,async () => {
       await expect(submitFeedback.execute({
            type : 'BUG',
            comment : 'dasdsa',
            screenshot : 'teste.png'
        })).rejects.toThrow();
    })
})