import React, { useEffect, useState } from "react";

const Toasters = () => {
  const [toasters, setToasters] = useState(null);

  const showToast = () => {
    setToasters("Kaam karle bhai toaster");
  };

  useEffect(() => {
    let interval;
    if (toasters) {
      interval = setInterval(() => {
        setToasters(null);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [toasters]);

  return (
        <div
          className={`w-80 p-4 h-16 absolute top-8 right-8 rounded-md ring-1 ring-black/5 bg-white duration-500 ${
            toasters ? "translate-y-2 visible opacity-100" : "invisible opacity-0 -translate-y-full"
          } duration-500`}
        >
          <p className="text-[12px] font-medium">{toasters}</p>
        </div>
  );
};

export default Toasters;
