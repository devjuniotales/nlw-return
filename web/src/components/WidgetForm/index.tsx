import { CloseButton } from "../CloseButton"

import bugImageUrl from '../../assets/bug.svg'
import ideadImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react"
import { FeedbackContentStep } from "./Steps/FeedbackContentStep"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep"


export const feedbackTypes = {
    BUG : {
        title : 'Problema',
        image : {
            source : bugImageUrl,
            alt : "Imagem de um inseto"
        }
    },
    IDEA : {
        title : 'Ideia',
        image : {
            source : ideadImageUrl,
            alt : "Imagem de uma lâmpada"
        }

    },
    OTHER : {
        title : "Outro",
        image : {
            source : bugImageUrl,
            alt : "Imagem de um balão de pensamento"
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes 

export function WidgetForm (){
    const [feedbackType , setFeedBackType ]  = useState<FeedbackType | null >(null)
    const [feebackSent , setFeedbackSent] = useState(false)

    function handleRestartFeedback(){
        setFeedbackSent(false)
        setFeedBackType(null)
    }

    return (
        <div className="bg-zinc-900 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <CloseButton/>
            {feebackSent ? (
                <FeedbackSucessStep
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            ): (
                <>
                {!feedbackType ? (
                  <FeedbackTypeStep onFeedbackTypeChanged ={ setFeedBackType } /> 
            ) : (
                <FeedbackContentStep 
                 feedbackType={feedbackType}
                 onFeedbackRestartRequested = { handleRestartFeedback}
                 onFeedbackSent = {() => setFeedbackSent(true)}
                />
            )}
                </>
            )}

            <footer>
                Feito com pela <a className="underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>

        </div>
    )
}