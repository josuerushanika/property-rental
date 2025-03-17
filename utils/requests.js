const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
//Fetch all properties
async function fetchProperties() {
    try {
        // Handle the case where the domain is not available yet
        if (!apiDomain) {
            return [];
        }
      const res = await fetch(`${apiDomain}/properties`);
  
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return await res.json();
    } catch (error) {
      console.error("Error fetching properties:", error);
      return []; // Return an empty array on error
    }
  }

  // Fetch single property

  async function fetchProperty(id) {
    try {
        // Handle the case where the domain is not available yet
        if (!apiDomain) {
            return null;
        }
      const res = await fetch(`${apiDomain}/properties/${id}`);
  
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return await res.json();
    } catch (error) {
      console.error("Error fetching properties:", error);
      return null; // Return an empty array on error
    }
  }
  export { fetchProperties, fetchProperty }
