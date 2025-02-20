import {test as base, Page} from '@playwright/test'
import { PageManager } from '../page-object/pageManager'

export type TestOptions = {
    pageManager: PageManager
    uniquePlaylistPage: string

}

export const test = base.extend<TestOptions>({

    pageManager: async({page}, use) => {
        const pm = new PageManager(page)
        await use(pm)
    },

    uniquePlaylistPage: async({page}, use) => {
        await page.goto('/')
        await use('')
    }


})