import axios from "axios";

export const FETCH_JOBS_PENDING = "FETCH_JOBS_PENDING";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR";

export const fetchJobsPending = () => {
    return {
        type: FETCH_JOBS_PENDING,
    };
};

export const fetchJobsSuccess = (jobs) => {
    return {
        type: FETCH_JOBS_SUCCESS,
        jobs: jobs,
    };
};

export const fetchJobsError = (error) => {
    return {
        type: FETCH_JOBS_ERROR,
        error: error,
    };
};

export const fetchJobs = () => (dispatch) => {
    dispatch(fetchJobsPending());
    console.log("fetchJobs() called");
    axios
        .get("https://devitjobs.us/api/jobsLight")
        .then((res) => {
            const jobs = res.data;
            dispatch(fetchJobsSuccess(jobs));
        })
        .catch((error) => {
            dispatch(fetchJobsError(error));
        });
};
