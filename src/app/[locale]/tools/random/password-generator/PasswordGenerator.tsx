"use client";

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import useToolPageContent from "@/hooks/useToolPageContent";
import { asMap, asText, formatUi } from "@/lib/tool-ui-helpers";

const META_PATH = "/tools/random/password-generator";

function getSecureRandomInt(max: number): number {
  if (typeof crypto !== "undefined" && crypto.getRandomValues && max > 0) {
    const range = max;
    const maxValid = Math.floor(256 / range) * range - 1;
    let randomValue: number;
    do {
      const randomArray = new Uint8Array(1);
      crypto.getRandomValues(randomArray);
      randomValue = randomArray[0];
    } while (randomValue > maxValid);
    return randomValue % range;
  }
  return Math.floor(Math.random() * max);
}

function generatePassword(
  length: number,
  hasUpper: boolean,
  hasLower: boolean,
  hasNumbers: boolean,
  hasSymbols: boolean
): string {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let chars = "";
  if (hasUpper) chars += uppercase;
  if (hasLower) chars += lowercase;
  if (hasNumbers) chars += numbers;
  if (hasSymbols) chars += symbols;

  if (chars.length === 0) return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    const idx = getSecureRandomInt(chars.length);
    password += chars[idx];
  }
  return password;
}

function assessStrength(
  password: string,
  labels: { weak: string; medium: string; strong: string }
): { level: "weak" | "medium" | "strong"; label: string } {
  const len = password.length;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  let strength = 0;
  if (len >= 12) strength++;
  if (hasUpper && hasLower) strength++;
  if (hasNumber) strength++;
  if (hasSymbol) strength++;

  if (strength <= 1) return { level: "weak", label: labels.weak };
  if (strength <= 3) return { level: "medium", label: labels.medium };
  return { level: "strong", label: labels.strong };
}

export default function PasswordGenerator() {
  const page = useToolPageContent(META_PATH);
  const ui = page?.ui;
  const toolUi = asMap(ui);
  const messagesUi = asMap(toolUi.messages);

  const strengthLabels = useMemo(
    () => ({
      weak: asText(toolUi.strengthWeak),
      medium: asText(toolUi.strengthMedium),
      strong: asText(toolUi.strengthStrong),
    }),
    [toolUi.strengthWeak, toolUi.strengthMedium, toolUi.strengthStrong]
  );

  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const messageTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const strength = password ? assessStrength(password, strengthLabels) : null;

  const showMessage = useCallback((text: string, type: "success" | "error") => {
    if (messageTimerRef.current) {
      clearTimeout(messageTimerRef.current);
      messageTimerRef.current = null;
    }
    setMessage({ text, type });
    messageTimerRef.current = setTimeout(() => {
      setMessage(null);
      messageTimerRef.current = null;
    }, 3000);
  }, []);

  useEffect(() => {
    return () => {
      if (messageTimerRef.current) {
        clearTimeout(messageTimerRef.current);
      }
    };
  }, []);

  const generate = useCallback(() => {
    if (!uppercase && !lowercase && !numbers && !symbols) {
      showMessage(asText(messagesUi.needOneOption), "error");
      setLowercase(true);
      return;
    }
    const pwd = generatePassword(length, uppercase, lowercase, numbers, symbols);
    setPassword(pwd);
    setMessage(null);
    if (messageTimerRef.current) {
      clearTimeout(messageTimerRef.current);
      messageTimerRef.current = null;
    }
  }, [length, uppercase, lowercase, numbers, symbols, showMessage, messagesUi.needOneOption]);

  const copyPassword = useCallback(async () => {
    if (!password) {
      showMessage(asText(messagesUi.noPasswordToCopy), "error");
      return;
    }
    try {
      await navigator.clipboard.writeText(password);
      showMessage(asText(messagesUi.copied), "success");
    } catch {
      showMessage(asText(messagesUi.copyFailed), "error");
    }
  }, [password, showMessage, messagesUi]);

  if (!ui) return null;

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 px-4 py-3">
        <p className="flex items-center gap-2 font-semibold text-amber-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          {asText(toolUi.privacyBanner)}
        </p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="mb-4">
          <label className="mb-2 block text-sm text-slate-400">{asText(toolUi.generatedPassword)}</label>
          <div className="relative flex gap-2">
            <input
              type="text"
              value={password}
              readOnly
              className="w-full rounded-lg border border-border bg-slate-950 px-4 py-3 font-mono text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder={asText(toolUi.placeholder)}
            />
            <button
              type="button"
              onClick={copyPassword}
              className="shrink-0 rounded-lg border border-border px-4 py-2 text-slate-300 transition-colors hover:bg-slate-700"
            >
              {asText(toolUi.copy)}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm text-slate-400">
              {formatUi(asText(toolUi.passwordLength), { length })}
            </label>
            <input
              type="range"
              min={8}
              max={32}
              value={length}
              onChange={(e) => {
                const v = Number(e.target.value);
                setLength(v);
                if (password) {
                  const pwd = generatePassword(v, uppercase, lowercase, numbers, symbols);
                  setPassword(pwd);
                }
              }}
              className="w-full accent-blue-500"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={uppercase}
                onChange={(e) => {
                  const v = e.target.checked;
                  setUppercase(v);
                  if (password && (v || lowercase || numbers || symbols)) {
                    setPassword(generatePassword(length, v, lowercase, numbers, symbols));
                  }
                }}
                className="rounded border-border"
              />
              {asText(toolUi.uppercase)}
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={lowercase}
                onChange={(e) => {
                  const v = e.target.checked;
                  setLowercase(v);
                  if (password && (uppercase || v || numbers || symbols)) {
                    setPassword(generatePassword(length, uppercase, v, numbers, symbols));
                  }
                }}
                className="rounded border-border"
              />
              {asText(toolUi.lowercase)}
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={numbers}
                onChange={(e) => {
                  const v = e.target.checked;
                  setNumbers(v);
                  if (password && (uppercase || lowercase || v || symbols)) {
                    setPassword(generatePassword(length, uppercase, lowercase, v, symbols));
                  }
                }}
                className="rounded border-border"
              />
              {asText(toolUi.numbers)}
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={symbols}
                onChange={(e) => {
                  const v = e.target.checked;
                  setSymbols(v);
                  if (password && (uppercase || lowercase || numbers || v)) {
                    setPassword(generatePassword(length, uppercase, lowercase, numbers, v));
                  }
                }}
                className="rounded border-border"
              />
              {asText(toolUi.symbols)}
            </label>
          </div>

          {strength && (
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-slate-400">{asText(toolUi.passwordStrength)}</span>
                <span className="font-medium text-slate-200">{strength.label}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                <div
                  className={`h-full transition-all ${
                    strength.level === "weak"
                      ? "w-1/3 bg-red-500"
                      : strength.level === "medium"
                        ? "w-2/3 bg-amber-500"
                        : "w-full bg-green-500"
                  }`}
                />
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={generate}
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-500"
          >
            {asText(toolUi.generateButton)}
          </button>
        </div>
      </div>

      {message && (
        <div
          className={`rounded-lg px-4 py-3 ${
            message.type === "success"
              ? "border border-green-500/30 bg-green-500/10 text-green-400"
              : "border border-red-500/30 bg-red-500/10 text-red-400"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
