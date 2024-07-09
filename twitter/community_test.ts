Feature('twitter_community');

BeforeSuite(({ login }) => {
    login('twt'); // login using twt session
 });

Scenario('open community',  ({ I }) => {
    I.click("a[aria-label='Communities']");
    I.wait(shortWait);
    I.see("Communities");
    I.wait(shortWait);
});

Scenario('by category',  ({ I }) => {
    I.click("Gaming");
    I.wait(shortWait);

    I.click("Next");
    I.click("Next");
    I.click("Cryptocurrency");
    I.wait(shortWait);

    I.scrollPageToBottom();
});


Scenario('join',  ({ I }) => {
    I.click("Search Communities");
    I.wait(shortWait);
    I.fillField("input[placeholder='Search Communities']", "valorant");
    I.wait(shortWait);
    I.click("VALORANT JP");
    I.wait(shortWait);

    I.click("Join");
    I.click("Close");
});

Scenario('explore community',  ({ I }) => {
    I.click("Latest");
    I.wait(shortWait);
    I.scrollPageToBottom();
    I.wait(shortWait);

    I.executeScript(() => {document.querySelectorAll("[data-testid='like']").forEach((e) => {
        if (e instanceof HTMLElement) {
            e.click();
        }})
    });
    I.scrollPageToTop();
    I.click("Media");
    I.scrollPageToBottom();
    I.wait(shortWait);

});