import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;
  const result = await dbConnect("practice-data").findOne({
    _id: new ObjectId(p),
  });

  return Response.json(result);
}
export async function DELETE(req, { params }) {
  const p = await params;
  const filter = { _id: new ObjectId(p) };
  const result =await dbConnect("practice-data").deleteOne(filter)
  return Response.json(result);
}
export async function PATCH(req, {params}) {
  const p = await params;
  const filter ={_id: new ObjectId(p)}
  const postedData =await req.json()
  const updated =await dbConnect("practice-data").updateOne(filter,{$set:{...postedData}},{upsert:true})

  return Response.json(updated);
}
