# Project Rules — Exercise 1

## 1. Project Scope

- Build a responsive People directory with a list view and a person detail view.
- Maintain two separate projects under Ex1: ex1-tsx and ex1-jsx.
- Use React with Vite and React Router v7 in both projects.
- Keep the routes, behavior, and layout consistent across both versions.
- Use TypeScript types for person data and component props in the TSX version.

## 2. Routing and Navigation

- Define routes with Routes, Route, and the element prop.
- Render Home, About, and People inside the shared layout through Outlet.
- Use NavLink with the isActive callback to highlight the current section.
- Keep the shared navigation visible on both /people and /people/:id.
- Render the selected person's details through the nested Outlet in PeopleLayout.

## 3. Person Data and Detail Handling

- Store the directory data in people.ts or people.js, depending on the project.
- Use stable string IDs as list keys and URL segments.
- Read the route ID with useParams() and find the selected person with people.find().
- Prompt the user to select a person when visiting /people.
- Show a 404 state in the detail panel when the ID does not match a person.
- Keep the directory visible when a person is selected or an invalid ID is entered.
- Render the person's name and role with dl, dt, and dd.

## 4. Lazy Loading and Accessibility

- Load PersonDetail with React.lazy() and a dynamic import.
- Wrap the detail route in Suspense and display a skeleton while the module loads.
- Reserve the same panel space for the skeleton and the loaded content.
- Set aria-busy="true" and aria-live="polite" on the skeleton.
- Label the main navigation and associate the directory panel with its heading.
- Keep navigation and person links usable with a keyboard.

## 5. Styling and Responsive Layout

- Keep navigation, directory, detail panel, and skeleton styles in App.css.
- Use CSS Grid with grid-template-columns: minmax(280px, 1fr) 2fr on wider screens.
- Stack the directory above the detail panel at widths of 700px or less.
- Support a 375px viewport without horizontal scrolling.
- Keep the active link visually distinct and text readable.

## 6. Verification

- Run npm run lint and npm run build in both projects.
- Check that the build emits a separate PersonDetail JavaScript chunk.
- Verify that Home, About, and People display the correct content and active link.
- Test /people, /people/1, and /people/999 in both projects.
- Check the two-column desktop layout and the stacked layout at 375px.
- Use Chrome DevTools network throttling with the cache disabled to check the skeleton.
- Check the Console for app errors and warnings.
- Verify a CLS of 0 when the detail route loads.
- Report only checks that were actually performed.

## 7. Git Workflow

- Follow Decomposition.md and preserve the two required implementation commits for each project:

  1. feat: router layout
  2. feat: detail route handling

- Commit follow-up fixes, folder moves, and documentation updates separately.
- Review staged files before committing.
- Track source files, project configuration, and package-lock.json.
- Keep node_modules, dist, and secrets out of Git.
- Maintain the .gitignore file in each project.