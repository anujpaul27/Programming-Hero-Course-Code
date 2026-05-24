import Image from "next/image";
import { MapPin, Calendar, Mail, Heart } from "lucide-react";

interface Pet {
  id: number;
  name: string;
  gender: "Male" | "Female";
  location: string;
  duration: string; // e.g., "2 years", "3 months in shelter"
  email: string;
  image: string;
  description: string;
  breed?: string;
}

const pets: Pet[] = [
  {
    id: 1,
    name: "Luna",
    gender: "Female",
    location: "Sylhet Pet Shelter",
    duration: "8 months",
    email: "adopt@sylhetpets.com",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600",
    description: "Luna is a playful and affectionate Golden Retriever who loves kids and long walks.",
    breed: "Golden Retriever",
  },
  {
    id: 2,
    name: "Max",
    gender: "Male",
    location: "Dhaka Animal Rescue",
    duration: "1 year 2 months",
    email: "rescue@dhakaanimals.com",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962ce?w=600",
    description: "Max is a calm and loyal German Shepherd looking for an active family.",
    breed: "German Shepherd",
  },
  {
    id: 3,
    name: "Milo",
    gender: "Male",
    location: "Sylhet Pet Shelter",
    duration: "4 months",
    email: "adopt@sylhetpets.com",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600",
    description: "Milo is a curious and energetic Siamese cat who enjoys climbing and cuddling.",
    breed: "Siamese Cat",
  },
];

export default function PetStorePage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <div className="navbar bg-primary text-primary-content shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold">🐾 PetStore</h1>
          </div>
          <div className="flex-none">
            <button className="btn btn-ghost btn-circle">
              <Heart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-4">Available Pets</h2>
        <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
          Find your perfect companion from our loving pets waiting for a forever home.
        </p>

        {/* Pet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200"
            >
              {/* Image */}
              <figure className="relative h-64">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <div className="absolute top-4 right-4 badge badge-primary badge-lg">
                  {pet.gender}
                </div>
              </figure>

              <div className="card-body">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="card-title text-2xl">{pet.name}</h3>
                    {pet.breed && (
                      <p className="text-sm text-base-content/60">{pet.breed}</p>
                    )}
                  </div>
                  <div className="badge badge-outline">{pet.duration}</div>
                </div>

                {/* Info */}
                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{pet.location}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>At shelter for {pet.duration}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-5 h-5 text-primary" />
                    <a
                      href={`mailto:${pet.email}`}
                      className="hover:underline text-primary"
                    >
                      {pet.email}
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base-content/80 mt-5 line-clamp-4">
                  {pet.description}
                </p>

                {/* Action Buttons */}
                <div className="card-actions mt-6">
                  <button className="btn btn-primary flex-1">
                    Adopt {pet.name}
                  </button>
                  <button className="btn btn-outline btn-square">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}