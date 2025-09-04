import { iconSvg, buildModalTemplate, MODAL_STYLE } from "./constants";
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
            const items = indexedPages
                .map((page) => `<li class="bf-list-item">${page}</li>`)
                .join("");

            const template = buildModalTemplate(en.pagesWithCardsTitle, items);

            logseq.provideStyle({
                key: "betterflashcards-modal-style",
                style: MODAL_STYLE,
            });

            logseq.provideUI({ key: "betterflashcards-modal", reset: true, template });
        },
        closeFlashcardsModal() {
            logseq.provideUI({ key: "betterflashcards-modal", reset: true, template: "" });
        },
    });

    logseq.App.registerUIItem("toolbar", {
        key: "betterflashcards-toolbar",
        template: `<a class="button" data-on-click="openFlashcards" title="Better Flashcards">${icon}</a>`,
    });
}
