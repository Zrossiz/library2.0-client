import axios from "axios";
import { withLayout } from "@/layout/Layout";
import { API } from "@/helpers/api";
import { IBook } from "@/interfaces/IBook";

interface BooksPageProps extends Record<string, unknown> {
  books: IBook[];
  length: number;
}

const Books = ({ books, length }: BooksPageProps) => {
  return (
    <div>
      {books.map((item, index) => (
        <div key={index}>{item.title}</div>
      ))}
      Всего книг: {length}
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get<BooksPageProps>(API.mainPage.getBooks);

  const books = data.data;
  const length = data.length;

  return {
    props: { books, length },
    revalidate: 60,
  };
};

export default withLayout(Books);
