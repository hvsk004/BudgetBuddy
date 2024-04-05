import zod from "zod";

const signupSchema = zod.object({
  email: zod.string().email({ message: "Invalid email" }),
  password: zod.string().min(6, { messgae: "Must be at least 6 characters" }),
  name: zod.string().min(3, { message: "Must be at least 3 characters" }),
  dateOfBirth: zod.string().datetime().optional(),
});

const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

const signupValidation = (req, res, next) => {
  const input = req.body;
  const result = signupSchema.safeParse(input);
  if (result.success) {
    next();
  } else {
    res.status(400).json({
      error: result.error.errors,
      message: "Validation error: Invalid Inputs",
    });
  }
};

const loginValidation = (req, res, next) => {
  const input = req.body;
  const result = signupSchema.safeParse(input);
  if (result.success) {
    next();
  } else {
    res.status(400).json({
      error: result.error.errors,
      message: "Validation error: Invalid Inputs",
    });
  }
};

export { signupValidation, loginValidation };
