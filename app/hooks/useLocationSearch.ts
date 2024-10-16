import { useState } from "react";
import { getLocations } from "../services/search/getLocations";
import { Location } from "../types/location";

interface UseSearchLocationReturn {
  searchResults: Location[];
  isLoading: boolean;
  error: string | null;
  searchLocations: (query: string) => void;
}

const useSearchLocation = (): UseSearchLocationReturn => {
  const [searchResults, setSearchResults] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchLocations = (query: string) => {
    if (!query) return;

    setIsLoading(true);
    setError(null);

    getLocations(query)
      .then((data) => {
        setSearchResults(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  return { searchResults, isLoading, error, searchLocations };
};

export default useSearchLocation;
