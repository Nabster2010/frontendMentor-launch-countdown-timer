import { FC, useEffect, useState } from "react";
import { formatMilliseconds, padWithLeadingZeros } from "./utils/helpers";
const LAUNCH_TIME = new Date("2023/2/15");
const App = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const [days, hours, minutes, seconds] = formatMilliseconds(
        LAUNCH_TIME.getTime() - Date.now()
      );
      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <main className="max-w-7xl mx-auto main-bg  h-screen flex flex-col justify-between items-center">
      <section className="px-4 md:px-8 pt-36 flex flex-col justify-center items-center ">
        <h2 className="text-white text-2xl md:text-3xl uppercase tracking-[.3em] text-center">
          we're launching soon
        </h2>
        <div className="grid grid-cols-4 gap-4 md:gap-6 mt-16">
          <TimeCard text="Days" number={padWithLeadingZeros(time.days, 2)} />
          <TimeCard text="hours" number={padWithLeadingZeros(time.hours, 2)} />
          <TimeCard
            text="minutes"
            number={padWithLeadingZeros(time.minutes, 2)}
          />
          <TimeCard
            text="seconds"
            number={padWithLeadingZeros(time.seconds, 2)}
          />
        </div>
      </section>
      <footer className="w-full">
        <nav>
          <ul className="flex justify-center items-center gap-8 mb-16">
            <li>
              <a href="">
                <svg
                  className=" group"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    className="group-hover:fill-SoftRed transition-colors"
                    fill="#8385A9"
                    d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  className="group"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    className="group-hover:fill-SoftRed transition-colors"
                    fill="#8385A9"
                    d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  className="group"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    className="group-hover:fill-SoftRed transition-colors"
                    fill="#8385A9"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  );
};

export default App;

type TimeCardProps = {
  text: string;
  number: string;
};
const TimeCard: FC<TimeCardProps> = ({ text, number }) => {
  return (
    <div>
      <div className="bg-black w-16 h-16 md:w-24 md:h-24  text-SoftRed rounded-md shadow-[0px_10px_0px_0px_rgba(0,0,0,1)] ">
        <div className="relative  md:px-8 px-4 text-3xl md:text-5xl bg-DarkDesaturatedBlue text-center h-full rounded-md flex justify-center items-center ">
          <span>{number}</span>
          <div className="absolute top-0 bottom-1/2 inset-x-0 bg-black/20 rounded-t-md ">
            <span className="absolute -bottom-1 left-0 bg-black w-1 h-2 rounded-r-full "></span>
            <span className="absolute -bottom-1 right-0 bg-black w-1 h-2 rounded-l-full "></span>
          </div>
        </div>
      </div>
      <div className="text-center mt-2">
        <small className="text-white/70 font-sans font-medium tracking-[.2em] text-[.5rem] md:text-xs uppercase text-center">
          {text}
        </small>
      </div>
    </div>
  );
};
