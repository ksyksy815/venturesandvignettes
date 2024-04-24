type Props = {
  keyword: string;
};

const SearchResults = ({ keyword }: Props) => {
  return (
    <p className={`text-2xl`}>
      {`Search results for '`}
      <span className={`font-bold`}>{keyword}</span>
      {`'`}
    </p>
  );
};

export default SearchResults;
