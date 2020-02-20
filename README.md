# technical-debt-ledger

This is a hackday project to develop a technical debt ledger that can be used with our github repos. The project will be developed in 3 phases. 

### Phase 1 
_Build a UI for a basic version of the technical debt ledger._
This will be a React web app separate from any current infrastructure. React was chosen because it is the framework that we are growing towards, and thus, a practical learning opportunity. This very basic version of the technical debt ledger includes but is not limited to:
- home page with a table view of technical debt in a given "repo"
- table view that includes cooumns for date, description, location, etc
- second page to show code in a single file
- edit buttons on both pages
- highlighted areas of code

### Phase 2
_Connect to Github_
During this phase, the Github api will be used to pump all the files in a given repo into the UI. This phase is not concerned with functionality. Completion of this phas means the following conditions are satisfied:
1. the app can display a list of files in a given repo
2. the app can display a single file given it's location in the repo

### Phase 3
_Functionality_
The goal of this phase is to get the functional parts of the debt ledger working with real repo data. This includes but is not limited to:
- add technical debt buttons
- technical debt listed in the table is also highlighted in the file
- technical debt can be removed


