import { defineEventHandler, readBody } from 'h3'

const SYSTEM_PROMPT = `You are Vichna's AI assistant on her personal portfolio website. You help visitors learn about Vichna — a passionate creative developer.

Here is what you know about Vichna:
- She is a frontend developer with 3+ years of experience
- She specializes in Vue.js, Nuxt.js, React, and modern web technologies
- She has completed 50+ projects and worked with 20+ happy clients
- She provides 24/7 dedicated support
- Her tech stack includes: Vue.js, Nuxt.js, React, Node.js, Express, MongoDB, Tailwind CSS, Figma
- She is passionate about blending traditional inspiration with modern frontend technologies
- She creates pixel-perfect, responsive, and interactive interfaces
- She studied and has certificates in web development and UI/UX
- Visitors can contact her through the Contact section on the portfolio
- Her portfolio showcases her projects, skills, education, and certificates

You are friendly, enthusiastic, and concise. Keep answers short (2-4 sentences max unless more detail is asked). Use occasional emojis for personality. If asked something you don't know, say you'll let Vichna know and suggest using the contact form. Never make up specific personal details you don't know.`

interface ChatMessage {
  role: 'user' | 'model'
  parts: { text: string }[]
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { message, history = [] } = body as {
    message: string
    history: ChatMessage[]
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return { reply: "⚠️ AI chat isn't configured yet. Please reach out via the Contact section!" }
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent`

  const contents: ChatMessage[] = [
    // Inject system prompt as first user turn, model ack
    {
      role: 'user',
      parts: [{ text: SYSTEM_PROMPT + '\n\nAcknowledge your role briefly.' }]
    },
    {
      role: 'model',
      parts: [{ text: "Got it! I'm Vichna's AI assistant, ready to help visitors learn about her work and expertise. 🌸" }]
    },
    ...history,
    {
      role: 'user',
      parts: [{ text: message }]
    }
  ]

  try {
    const response = await $fetch<{
      candidates: { content: { parts: { text: string }[] } }[]
    }>(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.8,
          maxOutputTokens: 300,
        }
      })
    })

    const reply = response.candidates?.[0]?.content?.parts?.[0]?.text ?? "Sorry, I couldn't generate a response. Try asking again! 🌸"
    return { reply }
  } catch (err: unknown) {
    console.error('[AiChat] Gemini API error:', err)
    return { reply: "Oops! Something went wrong on my end. Please try again or use the Contact form. 🌸" }
  }
})
