import { shortWait } from "../global";

Feature('spotify_playlist');

BeforeSuite(({ login }) => {
    login('spf'); // login using spf session
});

Scenario('add playlist', ({ I }) => {
    I.wait(shortWait);
    I.seeElement("button[aria-label='Create playlist or folder']");
    I.click("button[aria-label='Create playlist or folder']");
    I.click("Create a new playlist");
    I.see("Playlist");

});

Scenario('add song', ({ I }) => {
    I.fillField("input[placeholder='Search for songs or episodes']", "persona 3");
    I.wait(shortWait);
    I.executeScript(() => {document.querySelectorAll("[data-testid='add-to-playlist-button']").forEach((e) => {
        if (e instanceof HTMLElement) {
            e.click();
        }})
    });
    I.scrollPageToTop();
    I.see("List");
});

Scenario('add folder', ({ I }) => {
    I.wait(shortWait);
    I.seeElement("button[aria-label='Create playlist or folder']");
    I.click("button[aria-label='Create playlist or folder']");
    I.click("Create a playlist folder");
    I.see("New Folder");

});

Scenario('playlist to folder', ({ I }) => {
    I.rightClick(locate('div').withAttr({role:'button'}).inside(locate('ul').withAttr({role:'list', 'aria-label':'Your Library'})).last());
    I.click(locate('button').withAttr({role:'menuitem'}).inside(locate('div').withAttr({'data-testid':'context-menu'})).withDescendant(locate('span').withText('Move to folder')));
    I.click(locate('button').withAttr({role:'menuitem'}).withChild(locate('span').withText('New Folder').inside(locate('ul').withAttr({role:'menu', 'data-depth':'1'}))));
    I.wait(shortWait);
    // I.dontSee('My Playlist #1');
});

Scenario('playlist out', ({ I }) => {
    I.click(locate('div').withAttr({role:'button'}).inside(locate('ul').withAttr({role:'list', 'aria-label':'Your Library'})).first());
    I.rightClick(locate('div').withAttr({role:'button'}).inside(locate('ul').withAttr({role:'list', 'aria-label':'Your Library'})).first());
    I.click(locate('button').withAttr({role:'menuitem'}).inside(locate('div').withAttr({'data-testid':'context-menu'})).withDescendant(locate('span').withText('Move to folder')));
    I.click(locate('button').withAttr({role:'menuitem'}).withChild(locate('span').withText('Remove from folders').inside(locate('ul').withAttr({role:'menu', 'data-depth':'1'}))));
    I.wait(shortWait);
    I.see('My Playlist #1');
});

Scenario('remove folder', ({ I }) => {
    I.wait(shortWait);
    I.click(locate("button").withAttr({'aria-label': "Go back", 'data-encore-id': "buttonTertiary"}).after(locate("button").withAttr({'aria-label': "Collapse Your Library"})));
    I.rightClick(locate('div').withAttr({role:'button'}).inside(locate('ul').withAttr({role:'list', 'aria-label':'Your Library'})).first());
    I.click(locate("button").withAttr({role: 'menuitem'}).withChild(locate("span").withText("Delete")).inside(locate("ul").withAttr({role: 'menu'})));
    I.wait(shortWait);
    I.click("Delete");
});

Scenario('remove song', ({ I }) => {
    I.click(locate("button").withAttr({'data-testid': 'more-button'}).inside(locate("div").withAttr({'data-testid': 'playlist-tracklist'})));
    I.click(locate("button").withAttr({role: 'menuitem'}).inside(locate("div").withAttr({'data-testid': 'context-menu'})).withChild(locate("span").withText("Remove from this playlist")));

});

Scenario('remove playlist', ({ I }) => {
    I.rightClick(locate('div').withAttr({role:'button'}).inside(locate('ul').withAttr({role:'list', 'aria-label':'Your Library'})));
    I.click(locate('button').withAttr({role:'menuitem'}).inside(locate('div').withAttr({'data-testid':'context-menu'})).withChild(locate('span').withText('Delete')));
    I.click(locate('button').withChild(locate('span').withText('Delete')).inside(locate('div').withAttr({role:'dialog', 'aria-label':'Delete My Playlist #1?'})));
});
