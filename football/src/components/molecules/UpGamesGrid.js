import React, { useEffect, useState } from 'react';
import UpGameBox from '../atoms/UpGameBox';
import { format, parse } from 'date-fns';

export default function UpGamesGrid({ apiUrl, chosenDate }) {

    const formatDate = (matchDateTime) => {
        const dateObj = new Date(matchDateTime);
        const months = [
            "Januar", "Februar", "März", "April", "Mai", "Juni",
            "Juli", "August", "September", "Oktober", "November", "Dezember"
        ];
        const day = dateObj.getDate();
        const month = dateObj.getMonth();
        const year = dateObj.getFullYear();
        const formattedDate = day + ' ' + months[month] + ' ' + year;
        return formattedDate;
    }

    const formatTime = (matchDateTime) => {
        const dateObj = new Date(matchDateTime);
        const hours = dateObj.getHours()
        const minutes = dateObj.getMinutes();
        const formattedTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
        return formattedTime;
    }

    const [upGames, setUpGames] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUpGames(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [apiUrl]);

    const parsedDate = parse(chosenDate, 'dd.MM.yyyy', new Date());
    const formattedDate = format(parsedDate, 'd MMMM yyyy');

    const matchesForToday = upGames.filter((games) => {
        const formattedMatchDate = formatDate(games.matchDateTime);
        return formattedMatchDate === formattedDate;
    });

    return (
        <div className='grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3'>
            {matchesForToday.length > 0 ?
                matchesForToday.map((games, index) => (
                    <UpGameBox
                        key={index}
                        matchDate={formatDate(games.matchDateTime)}
                        matchTime={formatTime(games.matchDateTime)}
                        team1={games.team1.teamName}
                        team2={games.team2.teamName}
                        scoreTeam1={games.matchResults[games.matchResults.length - 1]?.pointsTeam1 ?? null}
                        scoreTeam2={games.matchResults[games.matchResults.length - 1]?.pointsTeam2 ?? null}
                    />
                ))
                :
                <div className='font-bold text-2xl text-white'>Heute finden keine Spiele statt.</div>
            }
        </div>
    );
}
