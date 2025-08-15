# 1. Conceptual Questions
a. What are React hooks, and how do they improve component logic compared to class-based components?
React hooks are used to manage the UI state of components. If a component is updated with the help of hooks, React updates it on the UI automatically.
useState hook is used to dynamically update the component, and useEffect hook runs code when certain values change (based on the dependency array).

b. Explain how you would optimize rendering performance in a React app with a long list (e.g., hundreds of job postings).
Instead of loading all items at once, I would only show what is visible on the screen and load more as the user scrolls (infinite scroll or pagination).
I would also use React.memo to prevent re-rendering unchanged items.

c. Describe your preferred approach to managing form state and validation in React.
I use the useState hook to store input values and update them as the user types.
For validation, I check the values when the user submits the form (or while typing) and show error messages if something is wrong.

# 2. Core Coding Challenge
## GitHub Link : https://github.com/kanojiaritika/React-assessment-talentBox
## Setup Instructions
1. npm create vite@latest
2. Write react app name "job-board"
3. Select React
4. Select JavaScript
5. cd job-board
6. npm install

# 3. Debugging Exercise
function JobList({ jobs }) {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <ul>
        {jobs.map(job => (
          <li>{job.title} at {job.company}</li>
        ))}
      </ul>
    </div>
  );
}

a. What is wrong or could be improved?
Each <li> in a list should have a unique key prop so React can track and update items correctly.

b. function JobList({ jobs }) {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <ul>
        {jobs.map(job => (
          <li key={job.id}>{job.title} at {job.company}</li>
        ))}
      </ul>
    </div>
  );
}

# 4. Performance Scenario
## a. Two techniques to improve performance of a job list with 500+ items:
1. Pagination or Infinite Scroll – Show only a few jobs at a time and load more as the user scrolls or clicks “next.”
2. React.memo or PureComponent – Prevent re-rendering of job items that haven’t changed.

## b. How to avoid unnecessary re-renders in a job card component:
1. Use React.memo so the component only re-renders when its props actually change.
2. Keep only the data that changes in the component’s state. If some data never changes (like a static image or text), don’t store it in state.
3. Make sure the parent component is not sending new prop values unnecessarily.
