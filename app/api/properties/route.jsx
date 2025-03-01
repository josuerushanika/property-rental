export const GET = async (request) => {
  try {
    return new Response(" Hello Word", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("something went Wrong", { status: 500 });
  }
};
