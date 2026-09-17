export function speakWord(entry) {
  if (entry.audio) {
    const audio = new Audio(entry.audio);
    audio.play().catch(() => {});
    return;
  }
  if (!("speechSynthesis" in window)) {
    alert("Voice is not available.");
    return;
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(entry.word);
  u.lang = "en-US";
  u.rate = 0.85;
  speechSynthesis.speak(u);
}
