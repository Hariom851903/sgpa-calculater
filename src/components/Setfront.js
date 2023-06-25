import Swal from 'sweetalert';
import React, { useState } from "react";

let mark = [];
let credit = [];

function Setfront({ ontotal, value }) {
  const [first, setfirst] = useState('');
  const [second, setsecond] = useState('');
  const [changebutton, setchangebutton] = useState(false);
  const [sgpa, setsgpa] = useState('');
  const [total, settotal] = useState(false);
 
  if (ontotal >= 1 && !total) {
    settotal(true);
  }

  function clicknext(event) {
    event.preventDefault();
    var x = Number(first);
    let y = Number(second);

    if (x >= 35) {
      // Do something
    } else {
      x = 0;
    }

    mark = [...mark, x];
    credit = [...credit, y];

    setfirst('');
    setsecond('');

    if (Number(ontotal) === Number(mark.length)) {
      setchangebutton(true);

      const result = mark.map((value, index) =>
        value === 0 ? parseInt(value / 10) * credit[index] : (parseInt(value / 10) + 1) * credit[index]
      );
      console.log(result);

      const totalcredit = credit.reduce((value, currentvalue) => value + currentvalue, 0);
      const totalresult = result.reduce((value, currentvalue) => value + currentvalue, 0);

      setsgpa((totalresult / totalcredit).toFixed(2));
    }
  }

  async function clicksubmit() {
    Swal({
      title: 'SGPA:',
      text: sgpa,
      icon: 'success',
      buttons: {
        confirm: {
          text: 'OK',
          value: true,
        },
      },
    });
  }

  function resetclick() {
    setfirst('');
    setsecond('');
    setsgpa('');
    setchangebutton(false);
    value();
    mark.length = 0;
    credit.length = 0;
    settotal(false);
  }

  return (
    <>
      {total ? (
        <div className="flex flex-col h-full w-full items-center mt-1 p-5">
          <form  onSubmit={clicknext} className="flex flex-col h-full w-[95%] sm:w-[60%] gap-10 rounded-md bg-cyan-900 justify-center items-center shadow-lg p-3">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label className="text-lg font-medium leading-none text-neutral-400">
                Marks of Subject: {changebutton ? '' : mark.length + 1}
              </label>
              <input
                 className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-lg text-center text-amber-100"
                 disabled={changebutton}
                 type="number"
                 value={first}
                min="0"
                max="100"
               required
              onChange={(event) => setfirst(event.target.value)}
/>

            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label className="text-lg font-medium leading-none text-neutral-400">
                Credit of Subject: {changebutton ? '' : mark.length + 1}
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 dark:border-gray-700 dark:text-gray-50 text-2xl text-center text-amber-100"
                disabled={changebutton}
                type="number"
                value={second}
                min="0"
                max="100"
                required
                onChange={(event) => setsecond(event.target.value)}
              />
            </div>
            <div>
              {changebutton ? (
                <button
                  className="rounded-full bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                  onClick={clicksubmit}
                >
                  Show Sgpa
                </button>
              ) : (
                <button
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-1.5 mt-4 text-base font-semibold leading-7 text-white
                   hover:bg-indigo-500"
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                  </svg>
                </button>
              )}
            </div>
          </form>
          <button
            className="rounded-md bg-green-600 px-3.5 py-1.5 lg:w-[10%] shadow-md mt-7 mb-3 text-base font-bold leading-7 text-white hover:bg-indigo-500"
            onClick={resetclick}
          >
            Reset All
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Setfront;
