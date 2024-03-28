import { ApolloError } from "@apollo/client";
import { Country } from "../graphql/queries";

interface CountryListProps {
  loading: boolean;
  error: ApolloError | Error | undefined;
  data: Country | undefined;
}

const CountryList: React.FC<CountryListProps> = ({ loading, error, data }) => {
  if (loading) return <div data-testid="loading-indicator">Loading...</div>;
  if (error) return <div data-testid="error-indicator">Error: {error.message}</div>;
  if (!data) return null;
  if (!data.country) return <div>No such country code</div>;
  return (
    <table className="border-collapse text-center">
      <thead>
        <tr>
          <th className="border px-4 py-2">Country Name</th>
          <th className="border px-4 py-2">Country Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">{data.country.name}</td>
          <td className="border px-4 py-2">{data.country.code}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CountryList;