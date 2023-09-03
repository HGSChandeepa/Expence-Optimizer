"use client";

import Footer from "../../components/Footer";
import SquigglyLines from "../../components/SquigglyLines";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import React, { useState } from "react"; // Import useState from React
import { newsletterSchema } from "./constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { firestoredb } from "../../lib/firebase.config";

type NewsletterSchema = {
  email: string;
};

export default function Page() {
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState(false);

  //here the email is stored in the firebase firestore database
  const handleEmailSubmit = async (data: NewsletterSchema) => {
    try {
      const docRef = firestoredb.collection("newsletterEmails").doc(email);
      docRef.set({
        email: email,
      });

      setEmail("");
      setNotified(true);

      console.log("stored");
    } catch (error) {
      console.log(error);
    }
  };

  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsletterSchema>({
    resolver: zodResolver(newsletterSchema),
  });

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <h1 className="mx-auto max-w-4xl font-display  font-bold tracking-normal text-gray-300 text-3xl md:text-4xl">
          Our Team Is Working Very Hard On this Product And We Will Be Up And
          Running Soon!{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">Join Our Newsletter</span>
          </span>
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Expense Analyzer: Effortlessly track, analyze, and optimize expenses.
          Achieve financial goals with AI-powered insights. Start your journey
          to financial success today!
        </h2>

        {
          //if the user has not been notified yet
          !notified ? (
            <form
              className=" w-full flex flex-col justify-center items-center mt-10"
              onSubmit={handleSubmit(handleEmailSubmit)}
            >
              <div className=" w-3/5 mt-3 flex  flex-col gap-2 items-center justify-center">
                <Input
                  {...register("email")}
                  type="email"
                  className="w-full md:w-80 rounded-full text-white py-2 px-4  bg-transparent/40"
                  placeholder="enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs font-semibold">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <Button
                type="submit"
                className="flex items-center justify-center gap-2 bg-blue-600 rounded-full text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
              >
                <FireLogo />
                Join The Newsletter
              </Button>
            </form>
          ) : (
            <div className="flex flex-col justify-center items-center mt-10">
              <h1 className="text-xl font-semibold text-blue-500">
                🚀Thank you for joining our newsletter!
              </h1>
              <h2 className="text-gray-400 text-sm mt-4">
                We will notify you when we are up and running!
              </h2>
            </div>
          )
        }
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6"></div>
      </main>
      <Footer />
    </div>
  );
}

function FireLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-rocket"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
