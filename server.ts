import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini AI initialization (safely initialized)
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey && apiKey !== "MY_GEMINI_API_KEY" ? new GoogleGenAI({ apiKey }) : null;

  // AI Advisory Assistant API Endpoint
  app.post("/api/ai-adviser", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      if (!ai) {
        // High quality informative response when API key is not supplied or is placeholder
        return res.json({
          reply: `Thank you for consulting ElevateX Advisory! ElevateX Advisory provides premier Chartered Accountancy, Corporate Advisory, and Strategic Financial Leadership for clients in Mumbai, Ahmedabad, and globally.

Our 6 Core Practice Areas include:
1. CFO Advisory (Virtual CFO)
2. Tech & Systems Support
3. Company Incorporation Services
4. Wealth Management
5. Income Planning Advisory
6. Financial Reporting & Compliance

For personalized strategic guidance regarding "${message}", click 'Book Consultation' to meet with our senior partners at Bandra-Kurla Complex (Mumbai) or GIFT City (Ahmedabad).`
        });
      }

      const prompt = `You are the AI Tax & Financial Advisory Specialist for ElevateX Advisory (Chartered Accountants & Business Advisors).
Brand Tone: Premium, Authoritative, Trustworthy, Executive Corporate Consulting style (Deloitte, EY, McKinsey benchmark).
Serving Clients In: Mumbai (BKC), Ahmedabad (GIFT City), and Global NRIs.

ElevateX Advisory Core Practice Areas:
1. CFO Advisory (Virtual CFO) - Cash flow, board reporting, unit economics, investor decks
2. Tech & Systems Support - ERP setup, e-invoicing, digital workflow automation, accounting tech
3. Company Incorporation Services - Fast-track Pvt Ltd, LLP, OPC, Foreign Subsidiary setup, MCA filings
4. Wealth Management - Asset allocation, capital gains tax optimization, family office, estate planning
5. Income Planning Advisory - Income tax optimization, ITR filings, advance tax planning, appeals
6. Financial Reporting & Compliance - Statutory audit, GST filings, MCA returns, Ind AS/GAAP financial statements

Client Question: "${message}"

Instructions:
Provide a crisp, authoritative, highly professional 2-3 paragraph answer explaining the legal, tax, or regulatory perspective under Indian law. Recommend the relevant ElevateX practice area and invite the user to schedule a consultation with our Senior Partners.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
      });

      res.json({ reply: response.text });
    } catch (err: any) {
      console.error("Gemini AI error:", err);
      res.status(500).json({
        reply: "ElevateX Advisory senior partners are available for your query. Please click 'Book Consultation' or call our office in Mumbai (+91 98200 84729) or Ahmedabad (+91 98980 12394) for immediate support."
      });
    }
  });

  // Consultation booking endpoint
  app.post("/api/consultation", (req, res) => {
    const { name, email, location, service, date, timeSlot } = req.body;
    const bookingId = "ELV-" + Math.floor(100000 + Math.random() * 900000);
    res.json({
      success: true,
      bookingId,
      message: `Consultation confirmed! Reference ID: ${bookingId}. Our senior partner at ElevateX Advisory ${location ? location.toUpperCase() : 'MUMBAI'} branch will contact ${email} shortly.`
    });
  });

  // Contact form endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email } = req.body;
    res.json({
      success: true,
      message: `Thank you ${name}! Your inquiry has been received. The ElevateX Advisory team will get in touch at ${email} within 2 business hours.`
    });
  });

  // Vite middleware in development mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`ElevateX Advisory server running at http://localhost:${PORT}`);
  });
}

startServer();
