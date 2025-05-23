import { Entity } from '@/api/core/entities/entity'
import { UniqueEntityId } from '@/api/core/entities/value-objects/unique-entity-id'

export interface QuestionAttachmentProps {
	questionId: UniqueEntityId
	attachmentId: UniqueEntityId
}

export class QuestionAttachment extends Entity<QuestionAttachmentProps> {
	get questionId() {
		return this.props.questionId
	}

	get attachmentId() {
		return this.props.attachmentId
	}

	static create(props: QuestionAttachmentProps, id?: UniqueEntityId) {
		const attachment = new QuestionAttachment(props, id)

		return attachment
	}
}
