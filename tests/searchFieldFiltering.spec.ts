import { test } from "./fixtures/testOptions";

test("Search Functionality with valid and invalid inputs", async ({
  pageManager,
  uniquePlaylistPage,
}) => {
  await pageManager.onUniquePlaylistPage.filterAvailableTracks();
  await pageManager.onUniquePlaylistPage.filterInvalidTracks();
});

test('Adding single track using the "+" button', async ({
  pageManager,
  uniquePlaylistPage,
}) => {
  await pageManager.onUniquePlaylistPage.addTrackToYourPlaylist();
});

test("Verify Total Duration of the Playlist in Seconds", async ({
  pageManager,
  uniquePlaylistPage,
}) => {
  await pageManager.onUniquePlaylistPage.totalDurationOfTheYourPlaylistInSeconds();
});
