import { Router }  from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

const  routes = Router();

 
routes.post('/feedbacks', async (req, res) => {
    const { type , comment , screenshot} = req.body

    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerMailAdapter =   new NodemailerMailAdapter ()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository,
        nodemailerMailAdapter
    )
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })
    res.status(201).send()
})

export default routes 