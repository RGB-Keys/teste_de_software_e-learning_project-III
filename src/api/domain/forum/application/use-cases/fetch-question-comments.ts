import { Either, right } from '@/api/core/either/either'
import { QuestionComment } from '../../enterprise/entities/question-comment'
import { QuestionCommentsRepository } from '../repositories/question-comments-repository'

interface FetchQuestionCommentsUseCaseRequest {
	questionId: string
	page: number
}

type FetchQuestionCommentsUseCaseResponse = Either<
	null,
	{
		questionComments: QuestionComment[]
	}
>

export class FetchQuestionCommentsUseCase {
	constructor(private questionCommentRepository: QuestionCommentsRepository) {}

	async execute({
		questionId,
		page,
	}: FetchQuestionCommentsUseCaseRequest): Promise<FetchQuestionCommentsUseCaseResponse> {
		const questionComments =
			await this.questionCommentRepository.findManyByQuestionId(questionId, {
				page,
			})

		return right({ questionComments })
	}
}
