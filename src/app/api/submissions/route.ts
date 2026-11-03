import { NextRequest, NextResponse } from 'next/server';
import { 
  getAllBlueprints, 
  getAllCandidates, 
  updateBlueprintStatus, 
  updateCandidateStatus 
} from '@/lib/storage';

export async function GET() {
  try {
    const blueprints = getAllBlueprints();
    const candidates = getAllCandidates();

    // Calculate analytics metrics
    const totalPipelineUSD = blueprints.reduce((acc, bp) => acc + bp.estimate.costMaxUSD, 0);
    const avgCandidateScore = candidates.length > 0
      ? Math.round(candidates.reduce((acc, c) => acc + c.score, 0) / candidates.length)
      : 0;

    return NextResponse.json({
      success: true,
      data: {
        blueprints,
        candidates,
        metrics: {
          totalBlueprints: blueprints.length,
          totalCandidates: candidates.length,
          totalPipelineUSD,
          avgCandidateScore,
          activeDomains: Array.from(new Set(blueprints.map((b) => b.domain))).length,
        },
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve aggregated submissions' },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, id, status } = body;

    if (!type || !id || !status) {
      return NextResponse.json(
        { success: false, error: 'type, id, and status are required' },
        { status: 400 }
      );
    }

    let updated = false;
    if (type === 'blueprint') {
      updated = updateBlueprintStatus(id, status);
    } else if (type === 'candidate') {
      updated = updateCandidateStatus(id, status);
    }

    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Record not found to update' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `${type} status updated to ${status}`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update record status' },
      { status: 500 }
    );
  }
}
