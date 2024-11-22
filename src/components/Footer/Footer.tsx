import Link from "next/link";

type Props = {
  topic: string;
  page: string | undefined;
  prevPage: string | null;
  nextPage: string | null;
};

export default function Footer({ topic, page, prevPage, nextPage }: Props) {
  if (!prevPage && !nextPage) return;
  const pageNums: number[] = [];
  if (prevPage && nextPage) {
    for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
      pageNums.push(i);
    }
  }
  const nextPageArea = nextPage ? (
    <Link
      href={`/search/${topic}/${nextPage} `}
      className={!prevPage ? "gallery-footer-more" : ""}
    >
      <p className={!prevPage ? "gallery-footer-text" : ""}>
        {!prevPage ? "more" : ""}
      </p>
      <span className="gallery-footer-r">&gt;&gt;&gt;</span>
    </Link>
  ) : null;
  const prevPageArea = prevPage ? (
    <>
      <Link
        href={`/search/${topic}/${prevPage} `}
        className={!nextPage ? "back" : ""}
      >
        &lt;&lt;&lt; {!nextPage ? "back" : ""}
      </Link>
      {pageNums.map((num) =>
        page && num === parseInt(page) ? (
          <p key={num} className="gallery-footer-active">
            {num}
          </p>
        ) : (
          <Link
            className="gallery-footer-notactive"
            key={num}
            href={`/search/${topic}/${num}`}
          >
            {num}
          </Link>
        )
      )}
    </>
  ) : null;
  return (
    <footer className="gallery-footer">
      {prevPageArea}
      {nextPageArea}
    </footer>
  );
}
