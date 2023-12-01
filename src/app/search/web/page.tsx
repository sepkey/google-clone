type ISearchItem = {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
};

type Props = {
  searchParams: { searchTerm: string };
};

export default async function WebSearchPage({ searchParams }: Props) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  const data = await response.json();

  const results = data.items as ISearchItem[];
  return (
    <div>
      {results &&
        results.map((result) => <h1 key={result.title}>{result.title}</h1>)}
    </div>
  );
}
