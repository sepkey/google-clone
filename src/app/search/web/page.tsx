import Link from 'next/link';

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

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  const data = await response.json();

  const results = data.items as ISearchItem[];
  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center pt-10 ">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to home page.{' '}
          <Link className="text-blue-500" href="/">
            HOME
          </Link>
        </p>
      </div>
    );
  }
  return (
    <div>
      {results &&
        results.map((result) => <h1 key={result.title}>{result.title}</h1>)}
    </div>
  );
}
