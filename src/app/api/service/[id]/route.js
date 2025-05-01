import bdconnect, { collectionObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async(req, { params }) => {

      const p = await params;
      const servicedata = bdconnect(collectionObj.servicecollection);
      const data = await servicedata.findOne({ service_id: p.id });
return  NextResponse.json(data)

}