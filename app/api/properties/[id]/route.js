import connectDB from "../../../../config/database";
import Property from "../../../../models/Property";
import mongoose from "mongoose";

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    // Await params before accessing properties
    const { id } = await params; 

    // Validate ObjectId before querying
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new Response("Invalid property ID", { status: 400 });
    }

    const property = await Property.findById(params.id);

    if (!property) {
      return new Response("Property Not Found", { status: 404 });
    }

    return new Response(JSON.stringify(property), {
      status: 200,
    });

  } catch (error) {
    console.error("Error fetching property:", error);
    return new Response("Something went wrong", { status: 500 });
  }
};
