import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [viewAll, setViewAll] = useState(true);
  const [userText, setUserText] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const jobURL =
    "https://api.allorigins.win/raw?url=https://arbeitnow.com/api/job-board-api";

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await fetch(jobURL);
      const result = await data.json();
      setJobs(result.data);
    };
    fetchJobs();
  }, []);

  const handleSearch = () => {
    const activeList = viewAll ? jobs : savedJobs;
    const filtered = activeList.filter(
      (job) =>
        job.title.toLowerCase().includes(userText.toLowerCase()) ||
        job.company_name.toLowerCase().includes(userText.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  useEffect(() => {
    // This code runs whenever userText OR viewAll changes
    handleSearch();
  }, [userText, viewAll]);

  // This is the list we will render
  const jobsToDisplay =
    filteredJobs.length > 0 || userText
      ? filteredJobs
      : viewAll
      ? jobs
      : savedJobs;

  return (
    <>
      <h1>Job Board</h1>
      <button
        onClick={async () => {
          setViewAll(true);
          const data = await fetch(jobURL);
          const result = await data.json();
          setJobs(result.data);
          setFilteredJobs([]); // clear old search
          setUserText("");
        }}
      >
        All Jobs
      </button>
      <button
        onClick={() => {
          setViewAll(false);
          setFilteredJobs([]); // clear old search
          setUserText("");
        }}
      >
        Saved Jobs
      </button>
      <br />

      <input
        id="search-bar"
        type="search"
        placeholder="Type job title or company"
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="jobs">
        {jobsToDisplay.map((job, idx) => (
          <div key={job.id || idx} className="job-card">
            <div>Company : {job.company_name}</div>
            <div>Job Title : {job.title}</div>
            <div>Location : {job.location}</div>
            {viewAll && (
              <button
                id="save-btn"
                onClick={() => {
                  setSavedJobs((prevArr) => [...prevArr, job]);
                  alert(
                    `Job "${job.title}" at "${job.company_name}" saved! ✅`
                  );
                }}
              >
                SAVE JOB
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
