import mongoose, { InferSchemaType, Schema } from "mongoose";

export const researcherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  scholar_id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  admin_id: {
    type: mongoose.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
  citations: {
    type: Number,
  },
  h_index: {
    type: Number,
  },
  i_index: {
    type: Number,
  },
  totalPapers: {
    type: Number,
  },
  positions: [
    {
      start: {
        type: Date,
        required: true,
      },
      end: {
        type: Date,
      },
      position: {
        type: String,
        required: true,
      },
      institute: {
        type: String,
        required: true,
      },
    },
  ],
});

export type ResearcherType = InferSchemaType<typeof researcherSchema>;
export const ResearcherModel = mongoose.model<ResearcherType>(
  "Researcher",
  researcherSchema
);
