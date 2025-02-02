"use client";

import { useInterviewers } from "@/contexts/interviewers.context";
import React from "react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import InterviewerCard from "@/components/dashboard/interviewer/interviewerCard";

const Interviewers = () => {
  const { interviewers, interviewersLoading } = useInterviewers();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 190;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 190;
    }
  };

  const InterviewersLoader = () => {
    return (
      <>
        <div className="flex">
          <div className="h-40 w-36 ml-1 mr-3 flex-none animate-pulse rounded-xl bg-gray-300"></div>
          <div className="h-40 w-36 ml-1 mr-3 flex-none animate-pulse rounded-xl bg-gray-300"></div>
          <div className="h-40 w-36 ml-1 mr-3 flex-none animate-pulse rounded-xl bg-gray-300"></div>
        </div>
      </>
    );
  };

  return (
    <main className="p-8 pt-0 ml-12 mr-auto rounded-md">
      <div className="flex flex-col items-left">
        {/* <h2 className="mb-3 mr-2 text-lg font-semibold tracking-tight">
          Welcome Back!👋
        </h2> */}
        <div className="flex flex-row mt-5">
          <div>
            <h2 className="mr-2 text-2xl font-semibold tracking-tight mt-3">
              Interviewers
            </h2>
            <h3 className=" text-sm tracking-tight text-gray-600 font-medium ">
              Get to know them by clicking the profile.
            </h3>
          </div>
          {/* <div className="ml-2 align-middle flex justify-center my-auto">
            <CreateInterviewerCard />
          </div> */}
        </div>
        <div className="relative flex items-center mt-2 ">
          <div
            id="slider"
            className=" h-44 pt-2 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide w-[40rem]"
          >
            {!interviewersLoading ? (
              <>
                {interviewers.map((interviewer, key) => (
                  <InterviewerCard key={key} interviewer={interviewer} />
                ))}
              </>
            ) : (
              <InterviewersLoader />
            )}
          </div>
          {interviewers.length > 4 ? (
            <div className="flex-row justify-center items-center space-y-10">
              <ChevronRight
                className="opacity-50 cursor-pointer hover:opacity-100"
                onClick={slideRight}
                size={40}
              />
              <ChevronLeft
                className="opacity-50 cursor-pointer hover:opacity-100"
                onClick={() => slideLeft()}
                size={40}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <p className="my-3 ">
          If you need to create custom interviewer, please reach out to us{" "}
          <span className="font-semibold">founders@folo-up.co</span>.
        </p>
      </div>
    </main>
  );
};

export default Interviewers;
