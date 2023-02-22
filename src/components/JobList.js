import React, { useEffect } from "react";
import { fetchJobs } from "../actions/jobActions";
import { connect } from "react-redux";
import Job from "./Job";

const JobList = ({ fetchJobs, jobs }) => {
    useEffect(() => {
        // console.log("calling fetchJobs() from useEffect()");
        fetchJobs();
        // console.log("fetchJobs() called");
    }, []);

    // https://devitjobs.us/api/jobsLight url

    const jobList = jobs?.map((job) => {
        return (
            <Job
                key={job._id}
                id={job._id}
            />
        );
    });
    return <div className="joblist">{jobList}</div>;
};

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
    };
};

export default connect(mapStateToProps, { fetchJobs })(JobList);
