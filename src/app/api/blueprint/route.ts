import { NextRequest, NextResponse } from 'next/server';
import { calculateBlueprintEstimate } from '@/lib/blueprintData';
import { getAllBlueprints, saveBlueprint } from '@/lib/storage';
import { BlueprintSubmission } from '@/types';

export async function GET() {
  try {
    const blueprints = getAllBlueprints();
    return NextResponse.json({ success: true, data: blueprints });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to retrieve blueprints' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      projectName,
      clientName,
      clientEmail,
      clientCompany,
      projectDescription,
      domain,
      userScale,
      aiFeatures,
      cloudProvider,
      compliance,
      urgency,
    } = body;

    // Basic Validation
    if (!projectName || !clientName || !clientEmail || !domain) {
      return NextResponse.json(
        { success: false, error: 'Missing required blueprint fields' },
        { status: 400 }
      );
    }

    // Run dynamic estimation engine
    const estimate = calculateBlueprintEstimate({
      domain,
      userScale: userScale || 'seed-mvp',
      aiFeatures: Array.isArray(aiFeatures) ? aiFeatures : [],
      cloudProvider: cloudProvider || 'aws',
      compliance: compliance || 'standard',
      urgency: urgency || 'standard',
    });

    const newBlueprint: BlueprintSubmission = {
      id: `BP-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      projectName,
      clientName,
      clientEmail,
      clientCompany: clientCompany || 'Private Enterprise',
      projectDescription: projectDescription || 'Custom software architecture proposal',
      domain,
      userScale: userScale || 'seed-mvp',
      aiFeatures: Array.isArray(aiFeatures) ? aiFeatures : [],
      cloudProvider: cloudProvider || 'aws',
      compliance: compliance || 'standard',
      urgency: urgency || 'standard',
      estimate,
      status: 'Pending Review',
    };

    saveBlueprint(newBlueprint);

    return NextResponse.json(
      {
        success: true,
        message: 'Architectural Blueprint generated and logged successfully',
        data: newBlueprint,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error generating blueprint:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error processing blueprint' },
      { status: 500 }
    );
  }
}
