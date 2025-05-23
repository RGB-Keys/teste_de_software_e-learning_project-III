import { Either, right } from '@/api/core/either/either'
import { UniqueEntityId } from '@/api/core/entities/value-objects/unique-entity-id'
import { Answer } from '../../enterprise/entities/answer'
import { AnswerAttachment } from '../../enterprise/entities/answer-attachment'
import { AnswerAttachmentList } from '../../enterprise/entities/answer-attachment-list'
import { AnswersRepository } from '../repositories/answers-repository'

interface AnswerQuestionUseCaseRequest {
	content: string
	instructorId: string
	questionId: string
	attachmentsIds: string[]
}

type AnswerQuestionUseCaseResponse = Either<null, { answer: Answer }>

export class AnswerQuestionUseCase {
	constructor(private answerRepository: AnswersRepository) {}

	async execute({
		instructorId,
		questionId,
		content,
		attachmentsIds,
	}: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionUseCaseResponse> {
		const answer = Answer.create({
			content,
			authorId: new UniqueEntityId(instructorId),
			questionId: new UniqueEntityId(questionId),
		})

		const answerAttachments = attachmentsIds.map((attachmentsId) => {
			return AnswerAttachment.create({
				attachmentId: new UniqueEntityId(attachmentsId),
				answerId: answer.id,
			})
		})

		answer.attachments = new AnswerAttachmentList(answerAttachments)

		await this.answerRepository.create(answer)

		return right({ answer })
	}
}
