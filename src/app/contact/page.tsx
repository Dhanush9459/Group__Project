"use client";

import moment from "moment";
import Head from "next/head";
import { useEffect, useState } from "react";
import NavigationFooter from "@/components/NavigationFooter";
import Footer from "@/components/Footer";

export default function BookATable() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(moment().format("YYYY-MM-DD"));
  }, []);

  setInterval(() => {
    setCurrentTime(moment().format("HH:mm"));
  }, 1000);

  return (
    <>
      <Head>
        <title>Restaurant Soul kitchen</title>
      </Head>

      <main className="min-h-screen relative overflow-hidden">
        <section className="w-full flex flex-col lg:flex-row h-full min-h-screen">
          <div
            style={{
              background: `url(https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNjUyOXwwfDF8c2VhcmNofDh8fFJFU1RBVVJBTlR8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-full lg:w-[50%] p-12 flex flex-col justify-between items-center min-h-screen h-full"
          >
              <div className="text-center mt-[300px]"> {/* Adjust margin-top here */}
              <h2 className="text-[#FFFFFF] font-dancing text-[80px] leading-none">
                Get in Touch
              </h2>
              <h1 className="text-[#FFD475] font-medium text-[40px] leading-none">
                With us
              </h1>
            </div>
            <NavigationFooter/>
          </div>

          <div className="w-full lg:w-[50%] flex flex-col justify-center h-auto px-4 pb-4 lg:px-0 lg:pb-0">
            <div className="max-w-[560px] h-auto mx-auto w-full">
              <p className=" mt-[16px]"style={{ color: "#FFD475", fontSize: "40px", textTransform: "uppercase" }}>
              C O N T A C T
              </p>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
                className="mt-[48px]"
              >
  <div className="text-white text-opacity-50 text-[16px]" style={{ color: "white", fontSize: "20px" }}>
  Send us a brief message for any questions or to get  touch with Soul Kitchen.<br /><br />
</div>

<div className="text-[16px]" style={{ color: "#FFD475", fontSize: "20px" }}>
  ADDRESS :<br /><br />
</div>
<div className="text-white" style={{ fontSize: "18px" }}>
  123 Stanza Avenue<br />
  Jersey city, NJ 01234<br /><br />
</div>

<div className="text-[16px]" style={{ color: "#FFD475", fontSize: "20px" }}>
  HOURS OF OPERATION :<br /><br />
</div>
<div>
  <pre>

    (Tuesday – Thursday)    11:00 AM – 10:30 PM<br />
    (Friday – Saturday)     11:00 AM – 11:00 PM<br />
    (Sunday)                11:00 AM – 10:30 PM <br /><br />
  </pre>
</div>


<div className="text-[16px]" style={{ color: "#FFD475", fontSize: "20px" }}>
  CONTACT INFO :<br /><br />
</div>
<div className="text-white" style={{ fontSize: "18px" }}>
  Phone: +1(123)-2340-999<br />
  Email: ABC@gmail.com<br /><br />
</div>             
              
              </form>
            </div>
            
          </div>
        </section>
      </main>
    </>
  );
}
