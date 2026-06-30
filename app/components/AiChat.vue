<template>
  <!-- Floating Chat Button -->
  <Transition name="chat-bubble">
    <button
      v-if="!isOpen"
      id="ai-chat-trigger"
      class="chat-fab"
      @click="openChat"
      aria-label="Open AI Chat"
    >
      <div class="chat-fab__pulse"></div>
      <div class="chat-fab__pulse chat-fab__pulse--delay"></div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
      <span class="chat-fab__label">Ask AI</span>
    </button>
  </Transition>

  <!-- Chat Panel -->
  <Transition name="chat-panel">
    <div v-if="isOpen" class="chat-panel" role="dialog" aria-label="AI Chat Assistant">
      <!-- Header -->
      <div class="chat-panel__header">
        <div class="chat-panel__avatar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v4l3 3"/>
          </svg>
          <div class="chat-panel__status"></div>
        </div>
        <div class="chat-panel__info">
          <span class="chat-panel__name">Vichna's AI</span>
          <span class="chat-panel__tag">Powered by Gemini ✨</span>
        </div>
        <button class="chat-panel__close" @click="closeChat" aria-label="Close chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <!-- Messages -->
      <div class="chat-panel__body" ref="messagesEl">
        <!-- Welcome pill -->
        <div class="chat-panel__date-pill">Start of conversation 🌸</div>

        <!-- Suggested prompts (shown only at start) -->
        <div v-if="messages.length === 0" class="chat-suggestions">
          <p class="chat-suggestions__hint">Ask me anything about Vichna:</p>
          <div class="chat-suggestions__chips">
            <button
              v-for="q in suggestedQuestions"
              :key="q"
              class="chat-suggestions__chip"
              @click="sendSuggestion(q)"
            >{{ q }}</button>
          </div>
        </div>

        <!-- Message bubbles -->
        <div
          v-for="(msg, idx) in messages"
          :key="idx"
          class="chat-msg"
          :class="msg.role === 'user' ? 'chat-msg--user' : 'chat-msg--ai'"
        >
          <div v-if="msg.role === 'ai'" class="chat-msg__avatar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
          <div class="chat-msg__bubble">{{ msg.text }}</div>
        </div>

        <!-- Typing indicator -->
        <div v-if="isTyping" class="chat-msg chat-msg--ai">
          <div class="chat-msg__avatar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
          <div class="chat-msg__bubble chat-msg__bubble--typing">
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
          </div>
        </div>
      </div>

      <!-- Footer / Input -->
      <div class="chat-panel__footer">
        <div class="chat-input-wrap">
          <textarea
            id="ai-chat-input"
            ref="inputEl"
            v-model="inputText"
            class="chat-input"
            placeholder="Ask about Vichna..."
            rows="1"
            maxlength="500"
            @keydown.enter.exact.prevent="sendMessage"
            @input="autoResize"
          ></textarea>
          <button
            id="ai-chat-send"
            class="chat-send-btn"
            @click="sendMessage"
            :disabled="!inputText.trim() || isTyping"
            aria-label="Send message"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
        <p class="chat-panel__disclaimer">AI may make mistakes · <a href="#contact">Contact Vichna directly</a></p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
interface Message {
  role: 'user' | 'ai'
  text: string
}

interface HistoryEntry {
  role: 'user' | 'model'
  parts: { text: string }[]
}

const isOpen = ref(false)
const inputText = ref('')
const messages = ref<Message[]>([])
const isTyping = ref(false)
const messagesEl = ref<HTMLElement | null>(null)
const inputEl = ref<HTMLTextAreaElement | null>(null)

const suggestedQuestions = [
  "What's Vichna's tech stack? 🛠️",
  "Tell me about her projects 🚀",
  "How can I contact Vichna? 📬",
  "What certifications does she have? 🎓",
]

const openChat = () => {
  isOpen.value = true
  nextTick(() => inputEl.value?.focus())
}

const closeChat = () => {
  isOpen.value = false
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesEl.value) {
      messagesEl.value.scrollTop = messagesEl.value.scrollHeight
    }
  })
}

const autoResize = () => {
  if (!inputEl.value) return
  inputEl.value.style.height = 'auto'
  inputEl.value.style.height = Math.min(inputEl.value.scrollHeight, 120) + 'px'
}

const buildHistory = (): HistoryEntry[] => {
  return messages.value.map((m) => ({
    role: m.role === 'user' ? 'user' : 'model',
    parts: [{ text: m.text }]
  }))
}

const sendSuggestion = (q: string) => {
  inputText.value = q
  sendMessage()
}

const sendMessage = async () => {
  const text = inputText.value.trim()
  if (!text || isTyping.value) return

  messages.value.push({ role: 'user', text })
  inputText.value = ''
  if (inputEl.value) inputEl.value.style.height = 'auto'
  scrollToBottom()
  isTyping.value = true

  try {
    const history = buildHistory().slice(0, -1) // exclude the just-added user msg
    const data = await $fetch<{ reply: string }>('/api/chat', {
      method: 'POST',
      body: { message: text, history }
    })
    messages.value.push({ role: 'ai', text: data.reply })
  } catch {
    messages.value.push({ role: 'ai', text: "Sorry, I ran into an issue! Please try again or use the Contact form. 🌸" })
  } finally {
    isTyping.value = false
    scrollToBottom()
  }
}
</script>

<style scoped>
/* =============================================
   FLOATING ACTION BUTTON
   ============================================= */
.chat-fab {
  position: fixed;
  bottom: 32px;
  left: 32px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 50px;
  background: linear-gradient(135deg, var(--pink-primary), var(--pink-dark));
  border: none;
  color: white;
  font-family: var(--font-main);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 4px 24px rgba(255, 45, 120, 0.55);
  transition: var(--transition);
  position: fixed;
}

.chat-fab:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 8px 36px rgba(255, 45, 120, 0.75);
}

.chat-fab__label {
  letter-spacing: 0.02em;
}

.chat-fab__pulse {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  background: linear-gradient(135deg, var(--pink-primary), var(--pink-dark));
  opacity: 0.4;
  animation: fab-pulse 2.4s ease-out infinite;
}

.chat-fab__pulse--delay {
  animation-delay: 0.8s;
}

@keyframes fab-pulse {
  0% { transform: scale(1); opacity: 0.4; }
  70% { transform: scale(1.25); opacity: 0; }
  100% { transform: scale(1.25); opacity: 0; }
}

/* =============================================
   CHAT PANEL
   ============================================= */
.chat-panel {
  position: fixed;
  bottom: 24px;
  left: 24px;
  width: 380px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border-pink);
  border-radius: 24px;
  overflow: hidden;
  z-index: 1000;
  box-shadow:
    0 0 0 1px rgba(255, 45, 120, 0.12),
    0 24px 80px rgba(0, 0, 0, 0.6),
    0 0 40px rgba(255, 45, 120, 0.15);
  backdrop-filter: blur(20px);
}

/* Header */
.chat-panel__header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: linear-gradient(135deg, rgba(255, 45, 120, 0.15), rgba(196, 0, 78, 0.1));
  border-bottom: 1px solid var(--border-subtle);
  flex-shrink: 0;
}

.chat-panel__avatar {
  position: relative;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--pink-primary), var(--pink-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.chat-panel__status {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 10px;
  height: 10px;
  background: #00e676;
  border-radius: 50%;
  border: 2px solid var(--bg-card);
  animation: status-pulse 2s ease-in-out infinite;
}

@keyframes status-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.4); }
  50% { box-shadow: 0 0 0 5px rgba(0, 230, 118, 0); }
}

.chat-panel__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.chat-panel__name {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
  font-family: var(--font-alt);
}

.chat-panel__tag {
  font-size: 11px;
  color: var(--pink-light);
  font-weight: 500;
  letter-spacing: 0.04em;
}

.chat-panel__close {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  flex-shrink: 0;
}

.chat-panel__close:hover {
  background: rgba(255, 45, 120, 0.15);
  border-color: var(--border-pink);
  color: var(--pink-light);
}

/* Body / Messages */
.chat-panel__body {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  scroll-behavior: smooth;
}

.chat-panel__body::-webkit-scrollbar { width: 4px; }
.chat-panel__body::-webkit-scrollbar-track { background: transparent; }
.chat-panel__body::-webkit-scrollbar-thumb { background: var(--border-pink); border-radius: 2px; }

.chat-panel__date-pill {
  text-align: center;
  font-size: 11px;
  color: var(--text-muted);
  background: var(--bg-card2);
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  padding: 4px 14px;
  align-self: center;
  flex-shrink: 0;
}

/* Suggestions */
.chat-suggestions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chat-suggestions__hint {
  font-size: 12px;
  color: var(--text-muted);
  text-align: center;
}

.chat-suggestions__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.chat-suggestions__chip {
  background: rgba(255, 45, 120, 0.08);
  border: 1px solid var(--border-pink);
  color: var(--pink-light);
  font-family: var(--font-main);
  font-size: 12px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: var(--transition);
  text-align: left;
}

.chat-suggestions__chip:hover {
  background: rgba(255, 45, 120, 0.18);
  box-shadow: 0 2px 12px rgba(255, 45, 120, 0.25);
  transform: translateY(-1px);
}

/* Messages */
.chat-msg {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  animation: msg-in 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes msg-in {
  from { opacity: 0; transform: translateY(12px) scale(0.95); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.chat-msg--user {
  flex-direction: row-reverse;
}

.chat-msg__avatar {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, var(--pink-primary), var(--pink-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.chat-msg__bubble {
  max-width: 78%;
  padding: 10px 14px;
  border-radius: 18px;
  font-size: 13.5px;
  line-height: 1.6;
  white-space: pre-wrap;
}

.chat-msg--ai .chat-msg__bubble {
  background: var(--bg-card2);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  border-bottom-left-radius: 4px;
}

.chat-msg--user .chat-msg__bubble {
  background: linear-gradient(135deg, var(--pink-primary), var(--pink-dark));
  color: white;
  border-bottom-right-radius: 4px;
}

/* Typing indicator */
.chat-msg__bubble--typing {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 14px 18px;
}

.typing-dot {
  width: 7px;
  height: 7px;
  background: var(--pink-light);
  border-radius: 50%;
  animation: typing-bounce 1.2s ease-in-out infinite;
}

.typing-dot:nth-child(1) { animation-delay: 0s; }
.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing-bounce {
  0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
  40%           { transform: translateY(-6px); opacity: 1; }
}

/* Footer / Input */
.chat-panel__footer {
  padding: 12px 16px 14px;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
  background: rgba(15, 15, 32, 0.6);
}

.chat-input-wrap {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  background: var(--bg-card2);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  padding: 8px 8px 8px 14px;
  transition: var(--transition);
}

.chat-input-wrap:focus-within {
  border-color: var(--border-pink);
  box-shadow: 0 0 0 3px rgba(255, 45, 120, 0.1);
}

.chat-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-family: var(--font-main);
  font-size: 13.5px;
  line-height: 1.5;
  resize: none;
  min-height: 22px;
  max-height: 120px;
}

.chat-input::placeholder {
  color: var(--text-muted);
}

.chat-send-btn {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--pink-primary), var(--pink-dark));
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  flex-shrink: 0;
}

.chat-send-btn:hover:not(:disabled) {
  transform: scale(1.1);
  box-shadow: 0 4px 16px rgba(255, 45, 120, 0.5);
}

.chat-send-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.chat-panel__disclaimer {
  font-size: 11px;
  color: var(--text-muted);
  text-align: center;
}

.chat-panel__disclaimer a {
  color: var(--pink-light);
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: var(--transition);
}

.chat-panel__disclaimer a:hover {
  text-decoration-color: var(--pink-light);
}

/* =============================================
   TRANSITIONS
   ============================================= */
.chat-bubble-enter-active,
.chat-bubble-leave-active {
  transition: opacity 0.25s, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.chat-bubble-enter-from,
.chat-bubble-leave-to {
  opacity: 0;
  transform: scale(0.7) translateY(12px);
}

.chat-panel-enter-active {
  transition: opacity 0.3s, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.chat-panel-leave-active {
  transition: opacity 0.2s, transform 0.25s ease-in;
}

.chat-panel-enter-from,
.chat-panel-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.96);
}

/* =============================================
   RESPONSIVE
   ============================================= */
@media (max-width: 480px) {
  .chat-panel {
    left: 12px;
    right: 12px;
    bottom: 12px;
    width: auto;
    max-height: 80vh;
    border-radius: 20px;
  }

  .chat-fab {
    bottom: 20px;
    left: 20px;
    padding: 12px 18px;
    font-size: 13px;
  }
}
</style>
