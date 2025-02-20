import { Page, expect } from "@playwright/test";
import { stringify } from "querystring";

export class UniquePlaylistPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async filterAvailableTracks() {
    const searchField = this.page.getByRole("textbox", { name: "Search" });
    const validTrackTitles: string[] = [
      "Summer Breeze",
      "Autumn Leaves",
      "Winter Winds",
      "Spring Dance",
      "Rainy Mood",
    ];

    for (const track of validTrackTitles) {
      await searchField.fill(track);
      await expect(this.page.getByText(track, { exact: true })).toBeVisible();
    }
  }

  async filterInvalidTracks() {
    const searchField = this.page.getByRole("textbox", { name: "Search" });
    const invalidTrackTitles: string[] = [
      "112",
      "!@#!@",
      "sdniW",
      "Веснянний танець",
    ];

    for (const track of invalidTrackTitles) {
      await searchField.fill(track);
      await expect(this.page.getByText("Not found")).toBeVisible();
    }
  }

  async addTrackToYourPlaylist() {
    const addButton = this.page.getByRole("button", { name: "+" });
    const paragraphYourPlaylist = expect(this.page.getByText("Your playlist"));
    const deleteButton = this.page.getByRole("button", { name: "-" });

    await addButton.first().click();
    await paragraphYourPlaylist.toBeVisible();
    await expect(this.page.getByText("Summer Breeze").nth(1)).toBeVisible();
    await expect(deleteButton).toBeVisible();
  }

  async totalDurationOfTheYourPlaylistInSeconds() {
    const addButton = this.page.getByRole("button", { name: "+" });

    function timeToSec(timeString: string) {
      const [minutes, seconds] = timeString.split(":").map(Number);
      return minutes * 60 + seconds;
    }

    const total =
      timeToSec("03:15") +
      timeToSec("03:20") +
      timeToSec("04:00") +
      timeToSec("03:00") +
      timeToSec("03:35");

    const count = await addButton.count();
    for (let i = 0; i < count; i++) {
      await addButton.nth(i).click();
    }

    await expect(this.page.getByText(total.toString())).toBeVisible();
  }
}
