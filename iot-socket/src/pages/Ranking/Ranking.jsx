import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GetTopRankingApi } from '../../redux/report/ReportApi';
import { useDispatch, useSelector } from 'react-redux';
import TopRankingChar from '../../Components/TopRankingChar';
import { Button } from 'antd';

const Ranking = () => {
    const { beginGameId } = useParams();
    const navigate = useNavigate();
    const [datachartTopRanking, setDataChartTopRanking] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const getRanking = async () => {
            await GetTopRankingApi(beginGameId, dispatch);
        }
        getRanking();
    })

    const topRanking = useSelector(state => state.report.rankingResult);
    const topRankingRef = useRef(topRanking);
    console.log(topRanking)
    useEffect(() => {
        topRankingRef.current = topRanking
    }, [topRanking])

    useEffect(() => {
        const data = [];
        if (topRankingRef.current.length > 0) {
            topRankingRef.current.forEach(element => {
                if (element.position === 2) {
                    data.push({
                        label: element.userName,
                        value: 2
                    })
                }
                else if (element.position === 1) {
                    data.push({
                        label: element.userName,
                        value: 3
                    })
                }
                else {
                    data.push({
                        label: element.userName,
                        value: 1
                    })
                }
            });
            const lastItem = data.pop();
            data.unshift(lastItem);
        }
        setDataChartTopRanking(data);
    }, [topRanking]);

    const handleDetailTopRanking = () => {
        navigate(`/detailTopRanking/${beginGameId}`);
    }
    const handleRollbackBeginGame = () => {
        navigate(`/list-topic`);
    }
    return (
        <div className='w-[100%] h-[70%] pt-[70px] flex justify-center'>
            <div className='ml-4'>
                <Button className='ButtonGoBack' onClick={handleRollbackBeginGame}>Trở về</Button>
            </div>
            <div className='w-[100%] h-[100%]'>
                <TopRankingChar data={datachartTopRanking} />
            </div>
            <div className='mr-4'>
                <Button className='ButtonDetailRanking' onClick={handleDetailTopRanking}>Thông tin chi tiết</Button>
            </div>
        </div>
    )
}

export default Ranking