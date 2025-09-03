import { en } from "../i18n/en";

export let indexedPages: string[] = [];

export async function indexFlashcardPages(): Promise<void> {
  try {
    const query = `[:find ?page-name ?content
                    :where
                    [?b :block/content ?content]
                    [?b :block/page ?p]
                    [?p :block/name ?page-name]]`;
    const result = await logseq.DB.datascriptQuery(query);
    const pageNames: string[] = (result || [])
      .filter((tuple: any[]) => {
        const content: string | undefined = tuple?.[1];
        return typeof content === 'string' && content.includes('#card');
      })
      .map((tuple: any[]) => tuple?.[0])
      .filter(Boolean);
    indexedPages = Array.from(new Set(pageNames)).sort((a, b) => a.localeCompare(b));
    console.log(`${en.logPrefix}: ${en.indexedPagesUpdated}`, { pages: indexedPages });
  } catch (e) {
    console.error(`${en.logPrefix}: ${en.indexingFailed}`, e);
    indexedPages = [];
  }
}