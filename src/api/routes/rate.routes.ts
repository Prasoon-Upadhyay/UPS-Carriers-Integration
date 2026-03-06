import { Router } from "express";
import { UPSProvider } from "../../providers/ups/ups.provider.js";
import { rateRequestSchema } from "../../core/validation/schema.js";
import { AppError } from "../../core/errors/errors.js";

const router = Router();
const ups = new UPSProvider();

router.post("/rates", async (req, res, next) => {
  try {
    const parsed = rateRequestSchema.safeParse(req.body);

    if (!parsed.success) {
      throw new AppError("Invalid request payload", 400, {
        formErrors: parsed.error.flatten().formErrors.join(", "),
        fieldErrors: Object.fromEntries(
          Object.entries(parsed.error.flatten().fieldErrors).map(([k, v]) => [
            k,
            v.join(", "),
          ]),
        ),
      });
    }

    const requestData = parsed.data;

    const rates = await ups.getRates(requestData);
    res.status(200).json({ rates });
  } catch (err) {
    if (err instanceof AppError) {
      next(err);
    } else {
      next(
        new AppError(
          err instanceof Error ? err.message : "Unknown error",
          500,
          {},
        ),
      );
    }
  }
});

export default router;
