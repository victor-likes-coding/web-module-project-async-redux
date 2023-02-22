import { FETCH_JOBS_PENDING, FETCH_JOBS_SUCCESS, FETCH_JOBS_ERROR } from "../actions/jobActions";

const initialState = {
    status: "idle",
    jobs: [
        {
            _id: "63f35139f33a6140d9ed78b0",
            jobUrl: "ektellollc-Sr-Software-Engineer",
            isFullRemote: false,
            companyId: "63efe016a3f0fb157288c37d",
            longitude: -73.97955599,
            latitude: 40.7591232,
            cityCategory: "new-york-city",
            stateCategory: "new-york",
            tier: "basic",
            logoImg: "ektellollc-logo-1676665197261.jpg",
            activeFrom: "2023-02-20T00:00:00.000+01:00",
            expiresOn: "2023-04-22T00:00:00.000+02:00",
            companyWebsiteLink: "ektello.com",
            candidateContactWay: "Email",
            company: "ektello.llc",
            address: "30 rockefeller ",
            actualCity: "New york",
            postalCode: "10112",
            companyType: "Services",
            companySize: "50-200",
            hasVisaSponsorship: "No",
            language: "English",
            perkKeys: [],
            offerStockOrBonus: false,
            name: "Sr. Software Engineer",
            jobType: "Full-Time",
            expLevel: "Senior",
            annualSalaryFrom: 180000,
            annualSalaryTo: 200000,
            techCategory: "Java",
            technologies: ["Java", "Golang", "Kafka", "MongoDB", "MySQL", "GraphQL"],
            filterTags: [
                "API",
                "CI/CD",
                "Git",
                "Golang",
                "GraphQL",
                "Java",
                "Kafka",
                "Marketing",
                "MongoDB",
                "MySQL",
                "NoSQL",
                "Oracle",
                "REST",
                "Redis",
                "SQL",
                "Scala",
                "Security",
                "Spring",
                "Spring Boot",
                "TDD",
                "Web",
                "gRPC",
                "microservices",
            ],
        },
    ],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOBS_PENDING:
            return {
                ...state,
                status: "pending",
            };
        case FETCH_JOBS_SUCCESS:
            return {
                ...state,
                status: "idle",
                jobs: action.jobs,
            };
        case FETCH_JOBS_ERROR:
            return {
                ...state,
                status: "idle",
                error: action.error,
            };
        default:
            return state;
    }
};
