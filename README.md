# Token Student
![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)
![Build Status](https://travis-ci.org/Ivachko/TokenStudent.svg?branch=master)
![Maintainability](https://api.codeclimate.com/v1/badges/99db463c4e4fdd7bbafe/maintainability)
![Test Coverage](https://api.codeclimate.com/v1/badges/99db463c4e4fdd7bbafe/test_coverage)
![Dependencies check](https://david-dm.org/ivachko/TokenStudent.svg)

Development of an internal project management and speaker platform for students
## Requirement

 - Node `>=9.6`
## Installation

 - Clone git repository `https://github.com/Ivachko/TokenStudent.git`
 - Assemble the project `npm install`
 - Create a mysql user: `tokenstudent` with password `tokenstudent`
 - Launch the server `sails lift`

As simple as that !

## Contribution
Thank you for your interest in this project! 

Once the installed project and your written changes, consider **adding tests** to ensure their integrity.
Run the tests locally with a `npm test` to make sure you didn't break anything.

Then do a pull request with a description of what your changes are making, a CoreTeam member will review and come back to you if necessary or incorporate your changes into the code.

## Conventions
 - The code follows [Standard](https://github.com/standard/standard "Standard repo") conventions.
 - Be sure to write the doc comments and comment on the key points of your code, *in English*.
 - For commit messages, use a short sentence without capital letters (always in English).
 - During a PR merge, commits must be squashed with their own commit message.
 - Git commit naming :
    - new/ for new func
    - test/ for adding test
    - fix/ for fix a bug
 - Git branch naming :
    - bug    - Code changes linked to a known issue.
    - feat   - New feature.
    - hotfix - Quick fixes to the codebase.
    - junk   - Experiments (will never be merged).
