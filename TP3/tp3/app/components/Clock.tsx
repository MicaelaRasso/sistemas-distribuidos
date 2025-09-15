"use client";
import { useState, useEffect } from "react";


export default function Clock() {
  const [time, setTime] = useState<string>(""); // ✅ explicitly typed as string

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours: string = String(now.getHours()).padStart(2, "0");
      const minutes: string = String(now.getMinutes()).padStart(2, "0");
      const seconds: string = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const interval: NodeJS.Timeout = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1 className="text-5xl font-bold text-white-600 text-center">{time}</h1>;
}
