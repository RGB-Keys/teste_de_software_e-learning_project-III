import { UniqueEntityId } from '@/api/core/entities/value-objects/unique-entity-id'
import { Optional } from '@/api/core/types/optional'
import { Comment, CommentProps } from './comment'

export interface QuestionCommentProps extends CommentProps {
	questionId: UniqueEntityId
}

export class QuestionComment extends Comment<QuestionCommentProps> {
	get questionId() {
		return this.props.questionId
	}

	static create(
		props: Optional<QuestionCommentProps, 'createdAt'>,
		id?: UniqueEntityId,
	) {
		const questionComment = new QuestionComment(
			{
				...props,
				createdAt: props.createdAt ?? new Date(),
			},
			id,
		)

		return questionComment
	}
}
