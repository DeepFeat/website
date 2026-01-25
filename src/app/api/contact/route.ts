import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, organization, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production, you would send this to your email service
    // For now, we'll log it and return success
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      organization,
      message,
      timestamp: new Date().toISOString(),
    });

    // Here you would integrate with:
    // - Resend: https://resend.com
    // - SendGrid: https://sendgrid.com
    // - Nodemailer with Google Workspace SMTP
    // - Or any other email service

    // Example with mailto (fallback):
    // The form will handle this on the client side

    return NextResponse.json(
      {
        success: true,
        message: 'Message received. We will contact you at info@deepfeat.ai'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
