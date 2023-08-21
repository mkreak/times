import React from 'react';
import './LatestStories.css';

const stories = [
    {
        "title": "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
        "link": "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/"
    },
    {
        "title": "'Writing With Fire' Shines a Light on All-Women News Outlet",
        "link": "https://time.com/6142628/writing-with-fire-india-documentary/"
    },
    {
        "title": "Moderna Booster May Wane After 6 Months",
        "link": "https://time.com/6142852/moderna-booster-wanes-omicron/"
    },
    {
        "title": "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
        "link":
            "https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaignpromise/"
    },
    {
        "title": "The James Webb Space Telescope Is in Position—And Now We Wait",
        "link": "https://time.com/6142769/james-webb-space-telescope-reaches-l2/"
    },
    {
        "title": "We Urgently Need a New National COVID-19 Response Plan",
        "link": "https://time.com/6142718/we-need-new-national-covid-19-response-plan/"
    }
];

function formatDate(dateString) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    return new Date(dateString).toLocaleDateString(undefined, options);
}

function LatestStories() {
    const today = new Date();
    return (
        <div className="latest-stories">
            <div className="section-title-container"> <h2 className="section-title">Latest Stories</h2></div>

            <div className="story-container">
                {stories.map((story, index) => (
                    <div key={index} className="story">
                        <a href={story.link} target="_blank" rel="noopener noreferrer">
                            {story.title}
                        </a>
                        <p className="story-date">{formatDate(today)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LatestStories;
