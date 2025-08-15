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
