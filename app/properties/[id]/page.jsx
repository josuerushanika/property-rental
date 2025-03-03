"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "../../../utils/requests";
import PropertyHeaderImage from "../../../components/PropertyHeaderImage";
import PropertyDetails from "../../../components/PropertyDetails";

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error("Error Fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {!loading && property?.image?.length > 0 ? (
        <PropertyHeaderImage image={property.images[0]} />
      ) : (
        !loading && <p>No image available</p>
      )}

      <section>
        <div>
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Properties
          </Link>
        </div>
      </section>
      <PropertyDetails property={property} />
    </>
  );
};

export default PropertyPage;
