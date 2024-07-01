Feature('twitter_community');

BeforeSuite(({ login }) => {
    login('tester'); // login using tester session
 });

Scenario('open community',  ({ I }) => {
    I.click("a[aria-label='Communities']");
    I.wait(2);
    I.see("Communities");
    I.wait(2);
});

Scenario('by category',  ({ I }) => {
    I.click("Gaming");
    I.wait(2);
    pause(); // in case of reload
    I.click("Next");
    I.click("Next");
    I.click("Cryptocurrency");
    I.wait(2);

    I.scrollPageToBottom();
});


Scenario('join',  ({ I }) => {
    I.click("Search Communities");
    I.wait(2);
    pause(); // in case of reload
    I.fillField("input[placeholder='Search Communities']", "valorant");
    I.wait(2);
    I.click("VALORANT");
    I.wait(2);

    I.click("Join");
    I.click("Close");
});

Scenario('explore community',  ({ I }) => {
    I.click("Latest");
    I.wait(2);
    pause(); // in case of reload
    I.scrollPageToBottom();
    I.wait(2);

    I.executeScript(() => {document.querySelectorAll("[data-testid='like']").forEach((e) => {
        if (e instanceof HTMLElement) {
            e.click();
        }})
    });
    I.scrollPageToTop();
    I.click("Media");
    I.scrollPageToBottom();
    I.wait(2);

    I.see("div[aria-label='Timeline: Community']")

});