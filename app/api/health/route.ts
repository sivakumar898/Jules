import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // The simplest query to check if the database is connected.
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ status: 'ok', message: 'Database connection is healthy.' });
  } catch (error) {
    console.error('Database health check failed:', error);
    return NextResponse.json(
      { status: 'error', message: 'Database connection failed.' },
      { status: 500 }
    );
  }
}
