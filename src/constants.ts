export const iconSvg = `
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="transform: translateX(2px);">
  <rect x="3" y="2" rx="1.5" ry="1.5" width="12" height="16" fill="#e0e0e0" stroke="#aaa" stroke-width="0.5"/>
  
  <rect x="5" y="4" rx="1.5" ry="1.5" width="12" height="16" fill="#f7f7f7" stroke="#555" stroke-width="0.7"/>
  
  <line x1="7" y1="7" x2="15" y2="7" stroke="#999" stroke-width="0.7"/>
  <line x1="7" y1="9" x2="14" y2="9" stroke="#bbb" stroke-width="0.7"/>
  <line x1="7" y1="11" x2="15" y2="11" stroke="#bbb" stroke-width="0.7"/>
  <line x1="7" y1="13" x2="13" y2="13" stroke="#ccc" stroke-width="0.7"/>
  
  <polygon points="15,0 18,4 12,4" fill="green"/>
  
  <rect x="14.5" y="4" width="1" height="4.5" fill="green"/>
</svg>`;

export function buildModalTemplate(title: string, itemsHtml: string): string {
  return `
    <div id="bf-modal-overlay" class="bf-overlay">
      <div class="bf-modal">
        <div class="bf-modal-header">
          <span class="bf-modal-title">${title}</span>
          <button class="bf-close" data-on-click="closeFlashcardsModal" aria-label="Close">×</button>
        </div>
        <div class="bf-modal-body">
          <ul class="bf-list">${itemsHtml}</ul>
        </div>
      </div>
    </div>`;
}

export const MODAL_STYLE = `
  .bf-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center; z-index: 9999; }
  .bf-modal { background: var(--ls-primary-background-color); color: var(--ls-primary-text-color); width: min(720px, 92vw); border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.25); overflow: hidden; border: 1px solid var(--ls-border-color); }
  .bf-modal-header { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border-bottom: 1px solid var(--ls-border-color); }
  .bf-modal-title { font-weight: 600; }
  .bf-close { background: transparent; border: none; font-size: 20px; line-height: 1; cursor: pointer; color: var(--ls-secondary-text-color); }
  .bf-close:hover { color: var(--ls-primary-text-color); }
  .bf-modal-body { padding: 12px 16px; max-height: 60vh; overflow: auto; }
  .bf-list { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: 1fr; gap: 6px; }
  .bf-list-item { padding: 8px 10px; border-radius: 8px; border: 1px solid var(--ls-border-color); background: var(--ls-tertiary-background-color); }
  @media (min-width: 640px) { .bf-list { grid-template-columns: 1fr 1fr; } }
`;