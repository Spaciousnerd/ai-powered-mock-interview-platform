import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview Ready with AI powered practice and feedback</h2>
          <p className="text-lg">
            Practice on real inteview questions and get instant feedback
          </p>
          <Button
            nativeButton={false}
            render={<Link href="/interview" />}
            className="btn-primary max-sm:w-full"
          >
            Start an Interiew
          </Button>
        </div>
        <img
          src="/robot.png"
          alt="robot"
          className="w-auto
          h-50
          max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
          {dummyInterviews.length === 0 && (
            <p>You havent taken any interviews yet.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
