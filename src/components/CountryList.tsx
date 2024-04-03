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
  if (data.countries.length === 0) return <div>No such country code</div>;
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="border py-2 w-80">Country Name</th>
            <th className="border py-2 w-20">Country Code</th>
          </tr>
        </thead>
        <tbody>
          {data.countries.map((country, index) => (
            <tr key={index}>
              <td className="border py-2">{country.name}</td>
              <td className="border py-2">{country.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryList;