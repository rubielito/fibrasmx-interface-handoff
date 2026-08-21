export type LocalAccount = { nickname: string; pinHash: string };
const ACCOUNTS_KEY = "fibras-mx-local-accounts";
const ACTIVE_KEY = "fibras-mx-local-active";

export function normalizeNickname(value: string) { return value.trim().toLowerCase().replace(/[^a-z0-9áéíóúüñ_-]/gi, "").slice(0, 20); }
export function isValidPin(value: string) { return /^\d{6}$/.test(value); }
export async function hashPin(pin: string) { const bytes = new TextEncoder().encode(pin); const digest = await crypto.subtle.digest("SHA-256", bytes); return Array.from(new Uint8Array(digest)).map(byte => byte.toString(16).padStart(2, "0")).join(""); }
export function readAccounts(): LocalAccount[] { try { return JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || "[]") as LocalAccount[]; } catch { return []; } }
export function writeAccounts(accounts: LocalAccount[]) { localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts)); }
export function getActiveNickname() { return localStorage.getItem(ACTIVE_KEY); }
export function setActiveNickname(nickname: string) { localStorage.setItem(ACTIVE_KEY, nickname); }
export function clearActiveNickname() { localStorage.removeItem(ACTIVE_KEY); }
export function getScopedStorageKey(base: string, nickname?: string | null) { return nickname ? `${base}:${nickname}` : base; }
export function clearLocalDemoData() { const keys = Object.keys(localStorage); keys.filter(key => key.startsWith("fibras-mx-portfolio:") || key.startsWith("fibras-mx-following:")).forEach(key => localStorage.removeItem(key)); }
