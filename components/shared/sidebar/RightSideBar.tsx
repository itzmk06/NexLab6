import Link from "next/link";
import React from "react";
import Image from "next/image";
import RenderTag from "../RenderTag";
import { getHotQuestions } from "@/lib/actions/question.action";
import { getPopularTags } from "@/lib/actions/tag.action";

const RightSideBar = async () => {
  const topQuestions = await getHotQuestions();
  const popularTags = await getPopularTags();

  return (
    <section className="bg-light900_dark200 dark:bg-dark900 custom-scrollbar sticky top-0 right-0 flex h-screen flex-col overflow-y-auto p-6 pt-24 max-xl:hidden lg:w-[350px] shadow-xl dark:shadow-none">
      <div>
        <h3 className="text-dark-200 dark:text-light-900 font-semibold text-xl tracking-tight mb-6">
          Top Questions
        </h3>
        <div className="flex flex-col gap-6">
          {topQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/question/${question._id}`}
              className="flex items-center justify-between gap-6 p-4 rounded-lg bg-light-200 dark:bg-dark-700 hover:bg-light-300 dark:hover:bg-dark-600 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            >
              <p className="text-dark-500 dark:text-light-700 text-base truncate">{question.title}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors transition-transform duration-300 ease-in-out transform hover:rotate-90"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-dark-200 dark:text-light-900 font-semibold text-xl tracking-tight mb-6">
          Popular Tags
        </h3>
        <div className="flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.numberOfQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
