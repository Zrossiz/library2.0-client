import axios from "axios";
import { withLayout } from "@/layout/Layout";
import { API } from "@/helpers/api";
import { IBook } from "@/interfaces/IBook";

interface BooksPageProps extends Record<string, unknown> {
  books: IBook[];
}

const Books = ({ books }: BooksPageProps) => {
  return <div>Книги</div>;
};

// export const getStaticProps = async () => {
//   const { data: books } = await axios.get<IBook[]>(API.mainPage.getBooks);
//   if (!books) {
//     return;
//   }

//   return {
//     props: { books },
//     revalidate: 60,
//   };
// };

export default withLayout(Books);
