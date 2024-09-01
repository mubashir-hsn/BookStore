import React from "react";
import styled from "styled-components";

const DashboardCard = () => {
  return (
    <>
    <div className="flex justify-center items-center gap-10 flex-wrap">

    <StyledWrapper>
      <div className="card bg-white text-black dark:bg-slate-800 dark:text-slate-100">
        <div className="title">
          <p className="title-text text-slate-900 dark:text-slate-100">Users</p>
          <p className="percent">
            <svg
              width="20"
              height="20"
              fill="#B9101E"
              viewBox="0 0 1792 1792"
              xmlns="[http://www.w3.org/2000/svg \u2197](http://www.w3.org/2000/svg)"
            >
              {" "}
              <path d="M384 576q0-26 19-45t45-19h896q26 0 45 19t19 45-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45z" />{" "}
            </svg>{" "}
            80%
          </p>
        </div>
        <div className="data text-slate-900 dark:text-slate-100">
          <p>1.2k</p>

          <div className="range relative w-full">
            <div className="fill" style={{width:80+"%"}}></div>
          </div>
        </div>
      </div>
    </StyledWrapper>
    
    <StyledWrapper>
      <div className="card bg-white text-black dark:bg-slate-800 dark:text-slate-100">
        <div className="title">
          <p className="title-text text-slate-900 dark:text-slate-100">Books</p>
          <p className="percent">
            <svg
              width="20"
              height="20"
              fill="#B9101E"
              viewBox="0 0 1792 1792"
              xmlns="[http://www.w3.org/2000/svg \u2197](http://www.w3.org/2000/svg)"
            >
              {" "}
              <path d="M384 576q0-26 19-45t45-19h896q26 0 45 19t19 45-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45z" />{" "}
            </svg>{" "}
            90%
          </p>
        </div>
        <div className="data text-slate-900 dark:text-slate-100">
          <p>1.5k</p>

          <div className="range relative w-full">
            <div className="fill" style={{width:90+"%"}}></div>
          </div>
        </div>
      </div>
    </StyledWrapper>
     
    <StyledWrapper>
      <div className="card bg-white text-black dark:bg-slate-800 dark:text-slate-100">
        <div className="title">
          <p className="title-text text-slate-900 dark:text-slate-100">Sales</p>
          <p className="percent">
            <svg
              width="20"
              height="20"
              fill="#B9101E"
              viewBox="0 0 1792 1792"
              xmlns="[http://www.w3.org/2000/svg \u2197](http://www.w3.org/2000/svg)"
            >
              {" "}
              <path d="M384 576q0-26 19-45t45-19h896q26 0 45 19t19 45-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45z" />{" "}
            </svg>{" "}
            70%
          </p>
        </div>
        <div className="data text-slate-900 dark:text-slate-100">
          <p>9.1K $</p>

          <div className="range">
            <div className="fill"></div>
          </div>
        </div>
      </div>
    </StyledWrapper>

    <StyledWrapper>
      <div className="card bg-white text-black dark:bg-slate-800 dark:text-slate-100">
        <div className="title">
          <p className="title-text text-slate-900 dark:text-slate-100">Orders</p>
          <p className="percent">
            <svg
              width="20"
              height="20"
              fill="#B9101E"
              viewBox="0 0 1792 1792"
              xmlns="[http://www.w3.org/2000/svg \u2197](http://www.w3.org/2000/svg)"
            >
              {" "}
              <path d="M384 576q0-26 19-45t45-19h896q26 0 45 19t19 45-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45z" />{" "}
            </svg>{" "}
            60%
          </p>
        </div>
        <div className="data text-slate-900 dark:text-slate-100">
          <p>720</p>

          <div className="range relative w-full">
            <div className="fill" style={{width:60+"%"}}></div>
          </div>
        </div>
      </div>
    </StyledWrapper>
    </div>
    </>
  );
};

const StyledWrapper = styled.div`
  .card {
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  width: 200px;
}

.title {
  display: flex;
  align-items: center;
}

.title span {
  position: relative;
  padding: 0.5rem;
  background-color: #B9101E;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
}

.title-text {
  margin-left: 0.5rem;
  font-size: 18px;
}

.percent {
  margin-left: 0.5rem;
  color: #B9101E;
  font-weight: 600;
  display: flex;
}

.data {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.data p {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 700;
  text-align: left;
}

.data .range {
  position: relative;
  background-color: #E5E7EB;
  width: 100%;
  height: 0.5rem;
  border-radius: 0.25rem;
}

.data .range .fill {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #B9101E;
  width: 70%;
  height: 100%;
  border-radius: 0.25rem;
  transition: .5s all;
}
`;

export default DashboardCard;
