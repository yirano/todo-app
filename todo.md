### Dashboard

#### MVP
- [ ] Dashboard
  - [ ] Shortcuts - `Component` _or_ `Dropdown`?
      - [ ] Today - `Link: Day`
          - Renders tasks for the day
      - [ ] Next 7 Days - `Link: Week`
          - Renders the next week (break down by date and render the next six from present day)
      - [ ] All Tasks - `Link: All_Tasks`
          - Container renders `Today`, `Tomorrow`, `Upcoming` _(Tasks scheduled for rest of week)_, `Someday` _(Unscheduled)_


- [ ] Container - `Component`
  - [ ] Static `<input type="text">` for new tasks
  - [ ] `<Route>`
    - [ ] `<Today />`
    - [ ] `<Week />`
    - [ ]  `<Someday />` -- Unscheduled
    - [ ] `<All_Tasks />` -- Today - Someday
  
  - [ ] User Functionalities
    - [ ] User can toggle complete
    - [ ] User can delete tasks
    - [ ] User can add tasks
    - [ ] Drag and Drop between `Today`, `Week`, `Someday`