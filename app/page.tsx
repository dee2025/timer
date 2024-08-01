"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime({ hours, minutes, seconds });
    };

    updateClock(); // Initial call to set the time immediately
    const intervalId = setInterval(updateClock, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="border px-8 py-4 rounded-xl mb-12">Created By D MAN</h1>
      <div className="flex items-center justify-center">
        <div className="text-[250px] text-center w-[420px] border rounded-lg px-8">
          {time.hours}
        </div>
        <div className="text-[250px] px-8">:</div>
        <div className="text-[250px] text-center w-[420px] border rounded-lg px-8">
          {time.minutes}
        </div>
        <div className="text-[250px] px-8">:</div>
        <div className="text-[250px] text-center  w-[420px] border rounded-lg px-8">
          {time.seconds}
        </div>
      </div>
    </main>
  );
}
