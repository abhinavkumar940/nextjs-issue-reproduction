import React, { useRef, useState } from "react";

export default function Subscribe() {
  const inputEl = useRef(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const subscribe = async (e) => {
    setLoading(true);
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    setLoading(false);

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    setSuccess(true);

    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <div className="">
      {!success ? (
        <form className="flex flex-col " onSubmit={subscribe}>
          <input
            ref={inputEl}
            type="email"
            placeholder="your email@yourdomain.com"
            className="p-4 text-[22px] font-normal rounded-t-md text-center"
          />
          <button
            type="submit"
            className="bg-green text-[22px] text-white rounded-b-md p-4 font-normal"
          >
            Get early access
          </button>
        </form>
      ) : (
        <div className="text-white font-bold text-2xl text-center">
          You are in!
        </div>
      )}

      {message && !success && (
        <span className="text-gray-10 text-xs text-white">{message}</span>
      )}
    </div>
  );
}
