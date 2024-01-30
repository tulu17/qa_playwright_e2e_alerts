Typescript: Alerts
Workflow

    Fork the repo.
    Clone your forked repository.
    Run the command npm i.
    Create a new branch git checkout -b testing.
    Resolve tasks in the cypress/e2e/alerts.cy.js.
    Check yourself before submitting the task with a Cypress checklist.
    Create a pull request.
    Do not forget to click on Re-request review if you submit the homework after previous review.

Task
Basic level

Read the documentation about the Catalog of Events.

App for testing: DemoQA

Your task is to automate the next flow:

    Click on the first button:
        assert the text inside the alert.
    Click on the second button:
        assert the text inside the alert is shown in 5 secons.
    Click on the third button:
        assert the text inside the allert;
        assert You selected Ok is shown.
    Click on the third button and click on Cancel (read about the window:confirm event in the documentation):
        assert the text inside the allert;
        assert You selected Cancel is shown.

Advanced level

Read the documentation:

    stub;
    window.

    Click on the fourth button and enter your name:
        assert your name is shown on the page.
