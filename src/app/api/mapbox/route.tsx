import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {
    const location = await prisma.locations.findMany()
    return NextResponse.json(location)
}

export const POST = async (req: Request) => {

    const location = await req.json()
    const lng = parseFloat(location.lng);
    const lat = parseFloat(location.lat);

    try {
      const res = await prisma.locations.create({
        data: {
            id: location.id,
            prefecture: location.prefecture,
            lng: lng,
            lat: lat,
            city: location.city,
            startdate: location.startdate,
            enddate: location.enddate
        },
      })
    //   console.log(NextResponse.json(res))
      return NextResponse.json(res)
    } catch (e: any) {
      return NextResponse.error
    }
  }