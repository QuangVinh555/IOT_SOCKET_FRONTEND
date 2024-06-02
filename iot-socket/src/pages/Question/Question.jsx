import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetQuestionByIdApi } from "../../redux/Question/QuestionApi";
import Topic from "./Topic";
import Questiondetail from "./Questiondetail";
import { SetGlobal } from "../../redux/Global/GlobalSlice";

const Question = () => {

  const IsTopicBtn = useSelector((state) => state.global.global);

  return (
    <div className="w-[100%]">
      {IsTopicBtn === false ? (
        <div className="p-36">
          <Topic />
        </div>
      ) : (
        <div>
          <Questiondetail />
        </div>
      )}
    </div>
  );
};

export default Question;
