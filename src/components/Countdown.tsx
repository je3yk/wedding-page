"use client";

import { useTimer } from "react-timer-hook";
import Typography from "./Typography";
import { useMemo, useState } from "react";

export const Countdown = ({ expiryTimestamp }: { expiryTimestamp: Date }) => {
  const [expired, setExpired] = useState(false);
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => setExpired(true),
  });

  const expiredMessage = useMemo(() => {
    if (expired) {
      if (expiryTimestamp.getTime() < Date.now() - 24 * 60 * 60 * 1000) {
        return "Ślub już się odbył! Dziękujemy wszystkim za przybycie!";
      }

      return "Wesele czas zacząć! Jedzmy, pijmy i bawmy się do białego rana!";
    }

    return null;
  }, [expired, expiryTimestamp]);

  if (expiredMessage) {
    return (
      <Typography variant="h2" className="text-natural text-center">
        {expiredMessage}
      </Typography>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-4 2xl:gap-8">
        <div className="flex flex-col items-center justify-center">
          <Typography variant="h3Label" className=" text-natural text-center">
            {days}
          </Typography>
          <Typography variant="h6" className="text-natural">
            dni
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Typography variant="h3Label" className="text-natural text-center">
            {hours}
          </Typography>
          <Typography variant="h6" className="text-natural">
            godziny
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Typography variant="h3Label" className="text-natural">
            {minutes}
          </Typography>
          <Typography variant="h6" className=" text-natural">
            minuty
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Typography variant="h3Label" className=" text-natural">
            {seconds}
          </Typography>
          <Typography variant="h6" className=" text-natural">
            sekundy
          </Typography>
        </div>
      </div>
    </div>
  );
};
