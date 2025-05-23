import { Entity } from '@/api/core/entities/entity'
import { UniqueEntityId } from '@/api/core/entities/value-objects/unique-entity-id'

export interface AnswerAttachmentProps {
	answerId: UniqueEntityId
	attachmentId: UniqueEntityId
}

export class AnswerAttachment extends Entity<AnswerAttachmentProps> {
	get answerId() {
		return this.props.answerId
	}

	get attachmentId() {
		return this.props.attachmentId
	}

	static create(props: AnswerAttachmentProps, id?: UniqueEntityId) {
		const attachment = new AnswerAttachment(props, id)

		return attachment
	}
}
