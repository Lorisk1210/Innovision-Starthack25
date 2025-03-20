import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI with your API key
// In production, this should be stored in an environment variable
const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY || '';

export const generateChatResponse = async (
    messages: { role: 'user' | 'model'; content: string }[],
    systemPrompt: string = ''
): Promise<string> => {
    if (!apiKey) {
        throw new Error('Gemini API key not set.');
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        // Prepare chat history
        const chat = model.startChat({
            history: messages.map(msg => ({
                role: msg.role === 'model' ? 'model' : 'user',
                parts: [{ text: msg.content }],
            })),
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1000,
            },
        });

        // Generate response
        const result = await chat.sendMessage(systemPrompt || messages[messages.length - 1].content);
        const response = result.response;
        return response.text();
    } catch (error) {
        console.error('Error generating chat response:', error);
        throw error;
    }
};

export const generateSentimentResponse = async (prompt: string): Promise<string> => {
    if (!apiKey) {
        throw new Error('Gemini API key not set.');
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel(
            { model: 'gemini-2.0-flash',
                systemInstruction: 'You will be getting a prompt from a user using our innovation coach webapp. The user will answer the following question: "What comes to mind when you think about innovation and your role in it?". You will have analyze the user input and return one of the following numbers: 1, 2, 3. Return 1 if you think the sentiment of the user is most likely: clueless. Return 2 if you think the sentiment of the user is most likely: motivated. Return 3 if you think the sentiment of the user is most likely: hesitant. Here are some examples of user inputs and what values you should return: 1) "Innovation? We dont really need that—were doing fine as we are." -> Return 1. 2) "Automation and AI sound interesting, but we work with coatings, not software" -> Return 1. 3) "If we ever need new machines, our suppliers will tell us. Weve always relied on their advice." -> Return 1. 4) "The industry is evolving rapidly – if we dont keep up, we will lose relevance" -> Return 2. 5) "If we invest in new technologies in the wrong direction, we risk wasting money and time" -> Return 2. 6) "I know innovation is crucial, but I want to make sure we start in the right place—where it creates the most impact" -> Return 2. 7) "If we invest in new machines or software, but the expected benefits dont materialize, it could jeopardize our financial situation." -> Return 3. 8) "I want to maintain control over our core processes and not become dependent on external partners for new technologies" -> Return 3. 9) "Price pressure is increasing – if we dont become more efficient, customers might switch to cheaper suppliers." -> Return 3.'
            });

        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error('Error generating sentiment response:', error);
        throw error;
    }
};
