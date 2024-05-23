export const defaultMapPageUrl = (rootPageId?: string) => (pageId: string) => {
  pageId = (pageId || '').replace(/-/g, '')

  if (rootPageId && pageId === rootPageId) {
    return window.location.href
  } else {
    return `${window.location.href}/${pageId}`
  }
}
