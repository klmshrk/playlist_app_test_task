import { test } from './fixtures/testOptions';

test('1st test', async ({ pageManager, uniquePlaylistPage }) => {
  await pageManager.onUniquePlaylistPage.filteringAvailableTracks()
});

