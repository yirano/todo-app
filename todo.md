### Dashboard

#### MVP : Client
- [ ] Dashboard
  - [ ] Shortcuts - `Dropdown`
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

#### MVP : Server
- [ ] - `POST` - User can register
- [ ] - `POST` - User can log in
- [ ] `GET` - User can view all tasks
  - [ ] `GET` - User can view tasks by: 
    - [ ] `Today`
    - [ ] `Week` - Current day of week plus six days out
    - [ ] `Someday` - Unscheduled

- [ ] `POST` - User can post new task
  - [ ] User has option to add due date

- [ ] `PUT` - User can edit task
  - [ ] Toggling complete is a PUT request

- [ ] `DELETE` - User can delete task
