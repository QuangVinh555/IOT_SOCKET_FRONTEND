import { getQuestionById, getQuestionByTopicId, QuestionError, QuestionStart } from "./QuestionSlice";
import axios from 'axios'


export const createQuestionApi = async(question, dispatch) => {
    const PK = process.env.REACT_APP_API;
    await dispatch(QuestionStart());
    try{
        const res = await axios.post(`${PK}/Question/create`, question);
        await dispatch(createQuestionApi(res.data));
    }catch(err){
        await dispatch(QuestionError());
    }
}

export const GetQuestionByIdApi = async(questionId, dispatch) => {
    const PK = process.env.REACT_APP_API;
    console.log(PK);
    await dispatch(QuestionStart());
    try{
        const res = await axios.get(`${PK}/Question/get-by-id?QuestionId=${questionId}`);
        await dispatch(getQuestionById(res.data));
    }catch(err){
        await dispatch(QuestionError());
    }
}


export const GetQuestionByTopicIdApi = async(topicId, dispatch) => {
    const PK = process.env.REACT_APP_API;
    await dispatch(QuestionStart());
    try{
        const res = await axios.get(`${PK}/Question/list-question-by-topicId`, topicId);
        await dispatch(getQuestionByTopicId(res.data));
    }catch(err){
        await dispatch(QuestionError());
    }
}