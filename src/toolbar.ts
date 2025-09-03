import { iconSvg } from "./constants";
import { indexFlashcardPages } from "./services/flashcards";

import { en } from "./i18n/en";

export function registerToolbar(getIndexedPages: () => string[]): void {
    const icon = iconSvg;

    logseq.provideModel({
        async openFlashcards() {
            await indexFlashcardPages();
            const indexedPages = getIndexedPages();
            if (!indexedPages.length) {
                logseq.UI.showMsg(en.noCardsFound, "warning");
                return;
            }
            const list = indexedPages.map((p) => `• ${p}`).join("\n");
            logseq.UI.showMsg(`${en.pagesWithCardsTitle}\n${list}`, "info", { timeout: 8000 });
        },
    });

    logseq.App.registerUIItem("toolbar", {
        key: "betterflashcards-toolbar",
        template: `<a class="button" data-on-click="openFlashcards" title="Better Flashcards">${icon}</a>`,
    });
}
