import React, { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../ReviewButtons/FeedbackOptions';
import Notification from '../NotificationMessage/Notification';
import Statistics from '../Statistics/Statistics';
import PropTypes from 'prop-types';

class CafeReviews extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        percentage: 0,
        visible: false
    }

    show = () => {
        this.setState({visible: true})
    }

    handleClick = (name) => {
        this.setState(prevState => ({
            [name]: prevState[name] + 1
        }))
        this.show()
        this.countTotalFeedback()
        this.countPositiveFeedbackPercentage()
    }

    countTotalFeedback = () => {
        this.setState(({ good, neutral, bad }) => ({
            total: good + neutral + bad
        }));
    }

    countPositiveFeedbackPercentage = () => {
        this.setState(({ good, total }) => ({
            percentage: good * 100 / total
        }));
    }

    render() {
        const { good, neutral, bad, total, percentage, visible } = this.state;
        const options = { good: "good", neutral: "neutral", bad: "bad"};
        const { handleClick } = this;

        return (
            <>
                <Section title="Please leave feedback" />
                <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
                <Section title="Statistics" />
                {!visible &&
                <Notification message="No feedback given" />}
                {visible &&
                    <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={percentage.toFixed()} />
                }
            </>
        )
    }
}

CafeReviews.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    percentage: PropTypes.number
}

export default CafeReviews;