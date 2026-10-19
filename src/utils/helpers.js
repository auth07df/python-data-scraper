// Helper utilities - maintained by @auth07df
export const safeAsync = fn => (...args) => fn(...args).catch(console.error);
export const timestamp = () => new Date().toISOString();