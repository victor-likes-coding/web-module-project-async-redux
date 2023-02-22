import React from "react";
import { connect } from "react-redux";
const Job = ({ jobs, id }) => {
    const job = jobs.find((job) => job._id === id);
    console.log(job);
    const { company, jobUrl: position, annualSalaryFrom, annualSalaryTo, cityCategory, technologies } = job;
    return (
        <div className="job">
            <h3>{position.split("-").slice(1).join(" ")}</h3>
            <p>
                {company
                    .split(".")
                    .map((word) => (word.toLowerCase() === "llc" ? word?.toUpperCase() : `${word[0]?.toUpperCase()}${word.slice(1)}`))
                    .join(" ")}{" "}
                is looking for {job.jobUrl.split("-").slice(1).join(" ")} in{" "}
                {cityCategory
                    .split("-")
                    .map((word) => `${word[0]?.toUpperCase()}${word.slice(1)}`)
                    .join(" ")}
                . The position pays between ${annualSalaryFrom} - ${annualSalaryTo}. The following technologies are required: {technologies.join(", ")}.
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
    };
};

export default connect(mapStateToProps, {})(Job);
