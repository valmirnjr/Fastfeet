import {
  isAfter,
  isBefore,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  parseISO,
} from "date-fns";

export default async (req, res, next) => {
  const { start_date } = req.body;

  if (start_date) {
    const withdrawalStart = setHours(
      setMinutes(setSeconds(setMilliseconds(parseISO(start_date), 0), 0), 0),
      8
    );

    const isAfter8 = isAfter(parseISO(start_date), withdrawalStart);

    const withdrawalEnd = setHours(
      setMinutes(setSeconds(setMilliseconds(parseISO(start_date), 0), 0), 0),
      18
    );

    const isBefore18 = isBefore(parseISO(start_date), withdrawalEnd);

    if (!(isAfter8 && isBefore18)) {
      return res.status(400).json({
        error: "Withdrawals can only happen between 08:00h and 18:00h",
      });
    }
  }

  return next();
};
