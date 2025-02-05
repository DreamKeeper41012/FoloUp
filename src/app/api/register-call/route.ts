import { InterviewerService } from "@/services/interviewers.service";
import { NextResponse } from "next/server";
import Retell from "retell-sdk";

const retellClient = new Retell({
  apiKey: process.env.RETELL_API_KEY || "",
});

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const interviewerId = body.interviewer_id;
  const interviewer = await InterviewerService.getInterviewer(interviewerId);
  const registerCallResponse = await retellClient.call.createWebCall({
    agent_id: interviewer?.agent_id,
    retell_llm_dynamic_variables: body.dynamic_data,
  });

  return NextResponse.json(
    {
      registerCallResponse,
    },
    { status: 200 },
  );
}
