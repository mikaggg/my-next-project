import Article from "@/app/_components/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";
import ButtomLink from "@/app/_components/ButtonLink";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getNewsDetail(params.slug).catch(notFound);
  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtomLink href="/news">ニュース一覧へ</ButtomLink>
      </div>
    </>
  );
}
