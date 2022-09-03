import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";

import Loading from "../components/Loding";
import EmptyState from "../components/EmptyState";

import apiClient from '../services'
import endPoints from '../services/endpoints'

import '../assets/styles/rank.css'
import RankContianer from "../containers/Rank";



function RankContainer () {

    const {state} = useLocation();
    const [isStateful, setIsStatful] = useState(true);
    const [isLoading, setIsLoading]  = useState(true);
    const [userRank, setUserRank]  = useState(0);

    useEffect(() => {
        
        if(state !== null) {

            async function getRank() {
                let res = await apiClient.post(endPoints.rank, {score: (state.score * 10)})
                return res.data;
            }

            getRank()
            .then(data => data.rank)
            .then(rank => setUserRank(rank))
            .then(() => setIsStatful(true))
            .catch(err => console.log(err.message))

        } else {
            setIsStatful(false)
        }
        setIsLoading(false)

    }, [isLoading, isStateful, state])

    if(isLoading) return <Loading />
    if(!isStateful) return <EmptyState message={'Please take the quiz first to calculate your rank'} />
    
    return (
        
        <RankContianer name={state.name} score={state.score} userRank={userRank} />

    )
}

export default RankContainer