import { Page, expect } from "@playwright/test";

export class UniquePlaylistPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async filteringAvailableTracks() {

        const trackTitle: string[] = [
           "Summer Breeze",
           "Autumn Leaves",
           "Winter Winds",
           "Spring Dance",
           "Rainy Mood"
        ];

        await this.page.getByRole('textbox', {name: 'Search'}).fill(trackTitle[0])
        
    }
}
