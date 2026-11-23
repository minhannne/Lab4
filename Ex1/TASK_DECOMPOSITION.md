# Exercise 1 — Task Decomposition

## Commit 1: Router layout

Commit message:
feat: router layout

Tasks:
- Set up React Router v7 in both the TSX and JSX projects.
- Define Home, About, and People routes with Routes, Route, and the element prop.
- Render child routes in the shared layout with Outlet.
- Highlight the current navigation link with the NavLink isActive callback.
- Build PeopleLayout with a directory and a nested outlet for person details.
- Use CSS Grid with minmax(280px, 1fr) 2fr on desktop and stack the panels on mobile.

## Commit 2: Detail route handling

Commit message:
feat: detail route handling

Tasks:
- Add the /people/:id route and implement PersonDetail.tsx and PersonDetail.jsx.
- Read the ID with useParams() and look up the person with people.find().
- Show a 404 state when the ID does not match a person.
- Render the person's name and role with dl, dt, and dd.
- Load PersonDetail on demand with React.lazy() and a dynamic import.
- Wrap the detail route in Suspense and match the skeleton's layout to the loaded content.
- Set aria-busy="true" and aria-live="polite" on the skeleton.

## Verification

- Run npm run lint and npm run build in both projects.
- Check that the build emits a separate PersonDetail JavaScript chunk.
- Navigate between Home, About, and People and verify the active link.
- Open /people/1 and verify that Nguyễn An and Developer appear.
- Open /people/999 and verify that the 404 state appears while the directory remains visible.
- Check the two-column desktop layout and the stacked layout at 375px.
- Throttle the network in Chrome DevTools to check the loading skeleton.
- Verify that the Console has no app errors or warnings and that CLS is 0.
- Verify both implementation commits in Git history.