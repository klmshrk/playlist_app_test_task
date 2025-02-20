import { Page, expect } from "@playwright/test";
import { UniquePlaylistPage } from "./uniquePlaylistPage";

export class PageManager { 

    private readonly page: Page
    private readonly uniquePlaylistPage: UniquePlaylistPage

    constructor(page: Page){
        this.page = page
        this.uniquePlaylistPage = new UniquePlaylistPage(this.page)
    }

    get onUniquePlaylistPage() {
        return this.uniquePlaylistPage;
    }

}