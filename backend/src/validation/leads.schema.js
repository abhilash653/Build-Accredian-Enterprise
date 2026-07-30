import { z } from "zod";

const teamSizes = ["1-10", "11-50", "51-200", "200+"];
const interestAreas = ["AI/ML", "Data Science", "Product", "Leadership"];

export const leadSubmissionSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(120, "Full name is too long"),
  workEmail: z.string().trim().min(1, "Work email is required").email("Enter a valid work email"),
  companyName: z
    .string()
    .trim()
    .min(1, "Company name is required")
    .max(120, "Company name is too long"),
  teamSize: z.enum(teamSizes, {
    required_error: "Select a valid team size",
    invalid_type_error: "Select a valid team size",
  }),
  interestArea: z.enum(interestAreas, {
    required_error: "Select a valid area of interest",
    invalid_type_error: "Select a valid area of interest",
  }),
  message: z
    .preprocess((value) => {
      if (typeof value !== "string") return value;
      const trimmed = value.trim();
      return trimmed.length > 0 ? trimmed : undefined;
    }, z.string().max(1000, "Message is too long").optional())
    .optional(),
});

export const teamSizeValues = teamSizes;
export const interestAreaValues = interestAreas;
