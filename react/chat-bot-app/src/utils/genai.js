// 기본 컨텐츠 생성형 AI
import { GoogleGenAI } from "@google/genai";
// 환경 변수 GEMINI API KEY
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// AI 객체 생성
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

//AI Chat 객체 생성
const chat = ai.chats.create({ model: "gemini-2.5-flash" });

const responseSchema = {
  type: "object",
  properties: {
    ismemo: {
      type: "boolean",
      description: "할 일, 메모, 업무, 계획 등 관련 여부",
    },
    content: { type: "string", description: "할 일 내용(본문)" },
    dueDate: { type: "string", description: "할 일 마감 기한(YYYY-MM-DD" },
  },
  required: ["isMemo", "content", "dueDate"], // 응답 필수 속성
  additionalProperties: false, // AI가 응답 추가 속성 여부(true/false) false라면 위에 고정된 구조안에서만 답변하게 됨.
};

// const config = {
//   temperature: 0,
//   maxOutputTokens: 1000,
//   stopSquences: "\\n\\n",
//   systemInstruction: [
//     "당신은 전문 IT 개발자 입니다",
//     "오로지 JavaScript 개발 개념에 대한 질문에만 답변해야 합니다",
//     "JavaScript질문이 아니면 '답변 할 수 없습니다' 라고 말해줘",
//   ],
// };
const systemInstruction = [
  `오늘 날짜: ${new Date().toISOString().split("T")[0]}`,
  "당신은 할 일 관리 AI입니다. 오직 할 일이나 업무 관련 내용만 처리합니다.",
  "JSON 형식으로 응답합니다.",
  "할 일이 아닌 일반적인 대화, 인사, 질문은 무시하고, isMemo를 false로 설정합니다.",
  "사용자의 질문을 이해할 수 없는 경우에는 isMemo를 false로 설정합니다.",
  "응답할 때는 할 일 내용, 마감 날짜, 우선 순위, 할 일 종류를 포함한 객체를 생성합니다.",
];

const config = {
  responseMimeType: "application/json",
  responseJsonSchema: responseSchema,
  systemInstruction: systemInstruction,
};

//사용 시 실행되지 않음.
// const response = await ai.models.generateContent({
//   model: "gemini-2.5-flash",
//   contents: "프롬프트(명령어)",
//   config: config,
// });

// console.log(response["text"]);

export { ai, chat, config };
