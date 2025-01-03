"use client";
import React from "react";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import { Spinner } from "react-ts-sook-ui";

const LoadingLayout = ({ children }) => {
  return <div className="relative ">{children}</div>;
};

const Loading = () => {
  return (
    <LoadingLayout>
      <div className="notion__container flex-col blur h-screen items-center p-[3px 0] ">
        <main className="notion-page pt-[52px]  notion-page-has-icon notion-page-has-text-icon notion-full-page flex items-center">
          <span className="w-[78px] h-[78px] bg-slate-200 rounded-md "></span>
          <h1 className="notion-title mt-10">gitHub Action & vercel 연동</h1>

          <div className="notion-collection-page-properties">
            <div className="notion-collection-row">
              <div className="notion-collection-row-body">
                <div className="notion-collection-row-property">
                  <div className="notion-collection-column-title">
                    <svg
                      viewBox="0 0 14 14"
                      className="notion-collection-column-title-icon"
                    >
                      <path d="M4 3a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1zM2 4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2z"></path>
                    </svg>
                    <div className="notion-collection-column-title-body">
                      tag
                    </div>
                  </div>
                  <div className="notion-collection-row-value">
                    <span className="notion-property notion-property-multi_select">
                      <div className="notion-property-multi_select-item notion-item-green">
                        deploy
                      </div>
                      <div className="notion-property-multi_select-item notion-item-gray">
                        git
                      </div>
                    </span>
                  </div>
                </div>
                <div className="notion-collection-row-property">
                  <div className="notion-collection-column-title">
                    <svg
                      viewBox="0 0 14 14"
                      className="notion-collection-column-title-icon"
                    >
                      <path d="M10.889 5.5H3.11v1.556h7.778V5.5zm1.555-4.444h-.777V0H10.11v1.056H3.89V0H2.333v1.056h-.777c-.864 0-1.548.7-1.548 1.555L0 12.5c0 .856.692 1.5 1.556 1.5h10.888C13.3 14 14 13.356 14 12.5V2.611c0-.855-.7-1.555-1.556-1.555zm0 11.444H1.556V3.944h10.888V12.5zM8.556 8.611H3.11v1.556h5.445V8.61z"></path>
                    </svg>
                    <div className="notion-collection-column-title-body">
                      date
                    </div>
                  </div>
                  <div className="notion-collection-row-value">
                    <span className="notion-property notion-property-date">
                      Feb 12, 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="flex items-center space-x-2">
          <Spinner size={"lg"} theme={"success"} />
        </div>
      </div>
    </LoadingLayout>
  );
};

export default Loading;
