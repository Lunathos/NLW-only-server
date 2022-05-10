import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// Spies

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

// Reaproveitando constantes
const submitFeedback = new SubmitFeedbackUseCase(           

    { create: async () => {}},        // Intansciando métodos sem retorno para testagem
    { sendMail: async () => {}}      // As dependências "fakes" - Testar somente o caso de uso
)

/* Categorização dos testes - Grupos */
describe('Submit feedback', () => {

    //Isso deveria fazer algo: enviar um feedback
    it('should be able to submit a feedback', async () => {


        expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,haeuawheuawhewua',
        })).resolves.not.toThrow(); //Espero executar a função e não resolva jogar um Erro.

        /* Testar se realmente a função criou o feedback*/
        // expect(createFeedbackSpy).toHaveBeenCalled();
        // expect(sendMailSpy).toHaveBeenCalled();
    });

    //Outro exemplo de teste, agora verificando se as regras de negócios estão funcionando
    //Isso não deveriar enviar um feedback sem um type
    it('should not be able to submit a feedback without type', async () => {

        expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,haeuawheuawhewua',
        })).rejects.toThrow(); //Espero rejeitar a execução e exiba um Erro!
    });

    //Isso não deveriar enviar um feedback sem um comentário
    it('should not be able to submit a feedback without comment', async () => {

        expect(submitFeedback.execute({
            type: 'PROBLEMA',
            comment: '',
            screenshot: 'data:image/png;base64,haeuawheuawhewua',
        })).rejects.toThrow(); //Espero rejeitar a execução e exiba um Erro!
    });

    //Isso não deveriar enviar um feedback sem o formato adequado de Screenshot
    it('should not be able to submit a feedback with an invalid screenshot', () => {

        expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Ok',
            screenshot: 'teste.jpeg',
        })).rejects.toThrow(); //Espero rejeitar a execução e exiba um Erro!
    });



});