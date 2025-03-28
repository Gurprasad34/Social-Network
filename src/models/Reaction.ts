import { Schema, Types, Document } from 'mongoose';
import { dateFormat } from '../utils/dateFormat.js';

interface IReaction extends Document {
    reactionId: Types.ObjectId;
    reactionBody: string;
    username: string;
    createdAt: any;
}

const reactionSchema = new Schema<IReaction>({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // FIX THIS BUG
        get: (timestamp: Date) => dateFormat(timestamp),

    },
}, {
    toJSON: {
        getters: true,
    },
    timestamps: true,
    id: false,
});

export default reactionSchema;