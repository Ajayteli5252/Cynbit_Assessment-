import { NextRequest, NextResponse } from 'next/server';
import { getAllCandidates, saveCandidate } from '@/lib/storage';
import { CandidateSubmission } from '@/types';

export async function GET() {
  try {
    const candidates = getAllCandidates();
    return NextResponse.json({ success: true, data: candidates });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve candidates' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      candidateName,
      email,
      phone,
      githubUrl,
      portfolioUrl,
      track,
      score,
      answers,
    } = body;

    if (!candidateName || !email || !githubUrl || !track) {
      return NextResponse.json(
        { success: false, error: 'Missing required candidate information' },
        { status: 400 }
      );
    }

    const numericScore = typeof score === 'number' ? score : 0;

    // Determine readiness badge based on score
    let readinessBadge: CandidateSubmission['readinessBadge'] = 'Junior Developer';
    if (numericScore >= 85) {
      readinessBadge = 'Lead System Architect';
    } else if (numericScore >= 60) {
      readinessBadge = 'Associate Architect';
    }

    const newCandidate: CandidateSubmission = {
      id: `BE-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      candidateName,
      email,
      phone,
      githubUrl,
      portfolioUrl,
      track,
      score: numericScore,
      readinessBadge,
      answers: Array.isArray(answers) ? answers : [],
      status: numericScore >= 80 ? 'Shortlisted for Interview' : 'Under Review',
    };

    saveCandidate(newCandidate);

    return NextResponse.json(
      {
        success: true,
        message: 'BitElevate diagnostic and application recorded successfully',
        data: newCandidate,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting candidate diagnostic:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing candidate' },
      { status: 500 }
    );
  }
}

