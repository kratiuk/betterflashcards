import "@logseq/libs";

import { registerToolbar } from "./toolbar";
import { indexFlashcardPages, indexedPages } from "./services/flashcards";

const main = async (): Promise<void> => {
  await indexFlashcardPages();
  registerToolbar(() => indexedPages);
};

logseq.ready(main).catch(console.error);